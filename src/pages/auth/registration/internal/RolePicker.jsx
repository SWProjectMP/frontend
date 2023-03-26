import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Radio } from "src/components";
import classes from "./role-picker.module.scss";

export const RolePicker = ({ onSelectRole }) => {
  const { register, watch } = useForm();

  useEffect(() => {
    const sub = watch((value) => {
      onSelectRole(value.role);
    });

    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <div className={classes["role-picker"]}>
      <Radio {...register("role")} value="student">
        Студент
      </Radio>
      <Radio {...register("role")} value="employer">
        Работадатель
      </Radio>
    </div>
  );
};
