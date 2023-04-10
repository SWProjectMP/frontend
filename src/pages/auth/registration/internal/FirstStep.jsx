import { useState } from "react";
import { useForm } from "react-hook-form";
import { RolePicker } from "./RolePicker";
import { Input, Button, Select } from "src/components";
import classes from "./first-step.module.scss";

const optionsUniversity = [
  {
    label: "Политех",
    value: "Политех",
  },
  {
    label: "Политех1",
    value: "Политех1",
  },
  {
    label: "Политех2",
    value: "Политех2",
  },
];

const optionsFaculty = [
  {
    label: "ФИТ1",
    value: "ФИТ1",
  },
  {
    label: "ФИТ2",
    value: "ФИТ2",
  },
  {
    label: "ФИТ3",
    value: "ФИТ3",
  },
];

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
      <form
        className={classes["first-step__form"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        {role === "employer" && (
          <>
            <Input {...register("company")} size="lg">
              Название компании
            </Input>
            <Input {...register("name")} size="lg">
              Фамилия Имя Отчество
            </Input>
            <Button variant="accent" size="lg" type="submit">
              Продолжить
            </Button>
          </>
        )}

        {role === "student" && (
          <>
            <Input {...register("name")} size="lg">
              Фамилия Имя Отчество
            </Input>
            <Select
              size="lg"
              options={optionsUniversity}
              name="university"
              onChange={setValue}
            >
              Вуз
            </Select>
            <Select
              size="lg"
              options={optionsFaculty}
              name="faculty"
              onChange={setValue}
            >
              Факультет
            </Select>
            <Button variant="accent" size="lg" type="submit">
              Продолжить
            </Button>
          </>
        )}
      </form>
    </div>
  );
};
