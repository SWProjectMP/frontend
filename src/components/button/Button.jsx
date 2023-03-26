import cn from "classnames";
import classes from "./style.module.scss";
import { useRipple } from "../../hooks/ripple/useRipple";
import { useEffect, useRef } from "react";

const btnVariants = {
  default: classes["btn--default"],
  accent: classes["btn--accent"],
  outline: classes["btn--outline"],
};

const btnSize = {
  md: classes["btn--md"],
  lg: classes["btn--lg"],
};

export const Button = ({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}) => {
  const variantClass = btnVariants[variant];
  const sizeClass = btnSize[size];

  const buttonRef = useRef();

  useEffect(() => {
    useRipple(buttonRef, classes["ripple"]);
  }, []);

  return (
    <button
      className={cn(classes["btn"], className, variantClass, sizeClass)}
      ref={buttonRef}
      {...props}
    >
      {children}
    </button>
  );
};
