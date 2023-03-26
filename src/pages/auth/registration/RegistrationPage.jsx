import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import cn from "classnames";
import loginIMG from "src/assets/login-img.png";
import classes from "./styles.module.scss";
import shared from "../shared.module.scss";
import { FirstStep } from "./internal/FirstStep";
import { RegistrationForm } from "./internal/RegistrationForm";

const RegistrationPage = () => {
  const { setValue, getValues } = useForm();
  const [isFirstStepDone, setIsFirstStepDone] = useState(false);

  const onFirstStepSubmit = (data) => {
    Object.keys(data).forEach((key) => {
      setValue(key, data[key]);
    });
    setIsFirstStepDone(true);
  };

  const onRegistrationSubmit = (data) => {
    Object.keys(data).forEach((key) => {
      setValue(key, data[key]);
    });

    console.log(getValues());
  };

  return (
    <div
      className={cn(
        classes["registration-page"],
        shared["auth-page"],
        "wrapper"
      )}
    >
      <div className={classes["registration-page__form-wrapper"]}>
        <h1>Регистрация</h1>
        <p className="subtitle">Пожалуйста, заполните данные.</p>

        {!isFirstStepDone ? (
          <FirstStep onSubmit={onFirstStepSubmit} />
        ) : (
          <RegistrationForm onSubmit={onRegistrationSubmit} />
        )}

        <div className={shared["auth-page__link-wrapper"]}>
          У вас уже есть аккаунт?{" "}
          <Link to="/login" className="link">
            Войти
          </Link>
        </div>
      </div>

      <div className={shared["auth-page__img-wrapper"]}>
        <img src={loginIMG} className={shared["auth-page__img"]} />
      </div>
    </div>
  );
};

export default RegistrationPage;
