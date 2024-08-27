import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  const { title, type, name, placeholder } = props;
  return (
    <div className="mb-6">
      <Label name={name}>{title}</Label>
      <Input type={type} name={name} placeholder={placeholder} ref={ref} />
    </div>
  );
});

export default InputForm;
