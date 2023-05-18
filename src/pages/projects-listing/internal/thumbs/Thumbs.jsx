import { NavLink } from "react-router-dom";
import { Tags, SvgIcon } from "src/components";
import classes from "./style.module.scss";

const Thumb = ({ data }) => {
  const { thumb, title, tags, info } = data;

  return (
    <div className={classes["thumb"]}>
      <img className={classes["thumb__img"]} src={thumb} alt={title} />

      <div className={classes["thumb__info"]}>
        <div>{info}</div>
        <Tags tags={tags} />
        <h2>{title}</h2>
        <NavLink className={classes["thumb__link"]}>
          <div className={classes["thumb__link-btn"]}>
            <SvgIcon name="arrow"></SvgIcon>
          </div>
          Смотреть проект
        </NavLink>
      </div>
    </div>
  );
};

export const Thumbs = ({ thumbs = [] }) => {
  return (
    <div className={classes["thumbs"]}>
      {thumbs.map((thumb) => (
        <Thumb data={thumb} key={thumb.id} />
      ))}
    </div>
  );
};
