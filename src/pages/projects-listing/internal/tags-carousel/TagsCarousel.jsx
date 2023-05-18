import { NavLink } from "react-router-dom";
import { SvgIcon } from "src/components";
import classes from "./style.module.scss";

export const TagsCarousel = ({ tags }) => {
  return (
    <div className={classes["tags-carousel"]}>
      <div className={classes["tags-carousel__carousel"]}>
        {tags.map((tag, idx) => (
          <NavLink
            to={{
              search: `tag=${tag}`,
            }}
            className={classes["tags-carousel__item"]}
            key={idx}
          >
            {tag}
          </NavLink>
        ))}
      </div>

      <button className={classes["tags-carousel__btn"]}>
        <SvgIcon name="chevron"></SvgIcon>
      </button>
    </div>
  );
};
