import { useForm } from "react-hook-form";
import cn from "classnames";
import { Input, Radio, Button, SvgIcon } from "../../../components";
import classes from "./form.module.scss";

export const Form = ({ onSubmit, className, ...props }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className={cn(className, classes["form"])}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <Input {...register("email")} placeholder="email" size="lg" />
      <Input {...register("password")} type="password" size="lg" />
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
