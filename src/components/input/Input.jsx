import { forwardRef } from "react";
import cn from "classnames";
import classes from "./style.module.scss";

const inputSize = {
  md: classes["input--md"],
  lg: classes["input--lg"],
};

export const Input = forwardRef(({ className, size = "md", ...props }, ref) => {
  const sizeClass = inputSize[size];

  return (
    <div className={classes["input"]}>
      <input
        className={cn(classes["input__element"], className, sizeClass)}
        {...props}
        ref={ref}
      />
    </div>
  );
});
