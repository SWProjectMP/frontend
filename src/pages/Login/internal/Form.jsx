import { useForm } from "react-hook-form";
import cn from "classnames";
import { Input, Radio, Button, SvgIcon } from "../../../components";
import classes from "./form.module.scss";

export const Form = ({ onSubmit, className, ...props }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <form
      className={cn(className, classes["form"])}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <Input
        {...register("email", {
          required: "Данное поле обязательно*",
        })}
        placeholder="Почта"
        size="lg"
      >
        Email адрес{" "}
        {errors.email && (
          <span class="text--error">{errors.email.message}</span>
        )}
      </Input>

      <Input
        {...register("password", {
          required: "Данное поле обязательно*",
        })}
        type="password"
        placeholder="Пароль"
        size="lg"
      >
        Пароль{" "}
        {errors.password && (
          <span className="text--error">{errors.password.message}</span>
        )}
      </Input>

      <Radio {...register("remember")}>Запомнить меня</Radio>
      <Button type="submit" variant="accent" size="lg">
        Войти
      </Button>
      <Button type="submit" variant="outline" size="lg">
        <SvgIcon name="vk" />
        Регистрация через VK
      </Button>
    </form>
  );
};
