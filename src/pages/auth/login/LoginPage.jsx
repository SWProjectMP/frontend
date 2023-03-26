import cn from "classnames";
import { Link } from "react-router-dom";
import { Form } from "./internal/Form";
import classes from "./styles.module.scss";
import shared from "../shared.module.scss";
import loginIMG from "src/assets/login-img.png";

const LoginPage = () => {
  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className={cn(classes["login-page"], shared["auth-page"], "wrapper")}>
      <div className={classes["login-page__form-wrapper"]}>
        <h1>Войти в систему</h1>
        <p className="subtitle">Пожалуйста, введите ваши контактные данные.</p>

        <Form className={classes["login-page__form"]} onSubmit={submit} />

        <div className={shared["auth-page__link-wrapper"]}>
          У вас нет аккаунта?{" "}
          <Link to="/registration" className="link">
            Зарегистрироваться
          </Link>
        </div>
      </div>

      <div className={shared["auth-page__img-wrapper"]}>
        <img className={shared["auth-page__img"]} src={loginIMG} />
      </div>
    </div>
  );
};

export default LoginPage;
