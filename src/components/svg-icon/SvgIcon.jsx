import classes from "./style.module.scss";

export const SvgIcon = ({ name }) => {
  const href = `#${name}`;

  return (
    <svg aria-hidden="true" className={classes["svg-icon"]}>
      <use xlinkHref={href} />
    </svg>
  );
};
