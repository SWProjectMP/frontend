import cn from "classnames";
import { NavLink, useParams } from "react-router-dom";
import { SvgIcon } from "src/components";
import classes from "./style.module.scss";
import { useMemo } from "react";

const showPages = 4;

export const Pagination = ({ total, perPage }) => {
  const { page } = useParams();

  const last = useMemo(() => {
    return Math.ceil(total / perPage);
  }, [total, perPage]);

  const start = useMemo(() => {
    if (showPages === last) {
      return 0;
    }

    if (+page + showPages - 1 >= last) {
      return last - showPages + 1;
    }

    return +page;
  }, [total, perPage, page]);

  const end = useMemo(() => {
    if (showPages === last) {
      return showPages;
    }

    if (+page + showPages - 1 >= last) {
      return last;
    }

    return +page;
  }, [start, last, page]);

  return (
    <div className={cn(classes["pagination"])}>
      <NavLink
        to={`../${+start - 1}`}
        relative="path"
        className={cn(
          classes["pagination__prev"],
          start === 1 ? classes["pagination__prev--disabled"] : ""
        )}
      >
        <SvgIcon name="chevron"></SvgIcon>
      </NavLink>

      {start !== 1 && (
        <NavLink
          to={`../1`}
          relative="path"
          className={classes["pagination__item"]}
        >
          ...
        </NavLink>
      )}

      {Array.from({ length: showPages }).map((_, idx) => (
        <NavLink
          to={`../${idx + start}`}
          relative="path"
          key={idx + start}
          className={({ isActive }) =>
            cn(
              classes["pagination__item"],
              isActive ? classes["pagination__item--active"] : ""
            )
          }
        >
          {idx + start}
        </NavLink>
      ))}

      {end !== last && (
        <NavLink
          to={`../${last}`}
          relative="path"
          className={classes["pagination__item"]}
        >
          ...
        </NavLink>
      )}

      <NavLink
        to={`../${+end + 1}`}
        relative="path"
        className={cn(
          classes["pagination__next"],
          end === last ? classes["pagination__prev--disabled"] : ""
        )}
      >
        <SvgIcon name="chevron"></SvgIcon>
      </NavLink>
    </div>
  );
};
