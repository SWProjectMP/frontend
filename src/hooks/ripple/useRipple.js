import classes from "./styles.module.scss";

const callBack = (elem, e, cn) => {
  const x = e.offsetX;
  const y = e.offsetY;

  const ripple = document.createElement("span");

  if (cn) {
    if (Array.isArray(cn)) {
      cn.forEach((cl) => {
        ripple.classList.add(cl);
      });
    } else {
      ripple.classList.add(cn);
    }
  }

  ripple.classList.add(classes["ripple"]);
  ripple.style.top = y + "px";
  ripple.style.left = x + "px";

  elem.current.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
};

export const useRipple = (elem, cn) => {
  if (!elem.current) return;

  elem.current.onclick = (e) => callBack(elem, e, cn);
};
