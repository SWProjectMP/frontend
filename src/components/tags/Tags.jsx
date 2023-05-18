import classes from "./style.module.scss";

export const Tags = ({ tags }) => {
  return (
    <div className={classes["tags"]}>
      {tags.map((tag) => (
        <div className={classes["tags__item"]} key={tag}>
          {tag}
        </div>
      ))}
    </div>
  );
};
