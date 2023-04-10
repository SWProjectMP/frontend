import { useState, useEffect, useRef, forwardRef } from "react";
import cn from "classnames";
import classes from "./styles.module.scss";
import { SvgIcon } from "src/components";

const selectSize = {
  md: classes["select--md"],
  lg: classes["select--lg"],
};

export const Select = forwardRef(
  ({ size, children, options, onChange, name, ...props }, _) => {
    const sizeClass = selectSize[size];
    const [isClicked, setIsClicked] = useState(false);
    const [current, setCurrent] = useState(options[0]);

    const selectRef = useRef(null);

    const handleOutsideClick = (e) => {
      if (!selectRef.current?.contains(e.target)) setIsClicked(false);
    };

    const onSelect = (option) => {
      setCurrent(option);
      onChange(name, option.value);
    };

    useEffect(() => {
      onChange(name, current.value);

      document.body.addEventListener("click", handleOutsideClick);
    }, []);

    return (
      <div
        className={cn(
          classes["select"],
          sizeClass,
          isClicked ? classes["select--active"] : ""
        )}
      >
        {children && (
          <label htmlFor={name} className={classes["select__label"]}>
            {children}
          </label>
        )}

        <div
          className={classes["select__current"]}
          onClick={() => setIsClicked(true)}
          ref={selectRef}
        >
          {current.label}
          <SvgIcon name="chevron" className={classes["select__chevron"]} />
        </div>

        <div className={classes["select__options"]}>
          {options.map((option) => (
            <div
              className={classes["select__option"]}
              key={option.value}
              onClick={() => onSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    );
  }
);
