import cn from "classnames";
import classes from "./style.module.scss";

export const SvgIcon = ({ name, className, ...props }) => {
  const href = `#${name}`;

  return (
    <svg
      aria-hidden="true"
      className={cn(classes["svg-icon"], className)}
      {...props}
    >
      <use xlinkHref={href} />
    </svg>
  );
};
