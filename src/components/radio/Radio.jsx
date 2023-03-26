import { forwardRef } from "react";
import cn from "classnames";
import classes from "./style.module.scss";

export const Radio = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className={classes["radio"]}>
      <input className={cn(className)} type="radio" {...props} ref={ref} />
      {children}
    </div>
  );
});
