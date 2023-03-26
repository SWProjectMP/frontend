import { useEffect, useRef } from "react";
import cn from "classnames";
import classes from "./style.module.scss";
import { useRipple } from "src/hooks/ripple/useRipple";

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
  type = "button",
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
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
