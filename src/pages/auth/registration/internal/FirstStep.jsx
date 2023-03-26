import { useState } from "react";
import { useForm } from "react-hook-form";
import { RolePicker } from "./RolePicker";
import { Input, Button } from "src/components";
import classes from "./first-step.module.scss";

export const FirstStep = ({ onSubmit }) => {
  const { register, setValue, handleSubmit, reset } = useForm();
  const [role, setRole] = useState("");

  const onSelectRole = (data) => {
    reset();
    setValue("role", data);
    setRole(data);
  };

  return (
    <div className={classes["first-step"]}>
      <RolePicker onSelectRole={onSelectRole} />

      {role === "employer" && (
        <form
          className={classes["first-step__form"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input {...register("company")} size="lg">
            Название компании
          </Input>
          <Input {...register("name")} size="lg">
            Фамилия Имя Отчество
          </Input>
          <Button variant="accent" size="lg" type="submit">
            Продолжить
          </Button>
        </form>
      )}
      {role === "student" && "student"}
    </div>
  );
};
