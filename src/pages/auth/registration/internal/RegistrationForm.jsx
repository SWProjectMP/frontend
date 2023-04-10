import { useForm } from "react-hook-form";
import { Input, Button, SvgIcon } from "src/components";
import classes from "./registration-form.module.scss";

export const RegistrationForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classes["registration-form__form"]}
    >
      <Input {...register("username")} size="lg">
        Имя пользователя
      </Input>
      <Input {...register("email")} size="lg">
        Email адрес
      </Input>
      <Input {...register("password")} size="lg" type="password">
        Придумайте пароль
      </Input>
      <Input {...register("password-repeat")} size="lg" type="password">
        Повторите пароль
      </Input>

      <Button type="submit" variant="accent" size="lg">
        Регистрация
      </Button>
      <Button variant="outline" size="lg">
        <SvgIcon name="vk" />
        Регистрация через VK
      </Button>
    </form>
  );
};
