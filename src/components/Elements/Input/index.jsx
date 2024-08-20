import Input from "./Input";
import Label from "./Label";

const InputForm = ({ title, type, name, placeholder }) => {
  return (
    <div className="mb-6">
      <Label name={name}>{title}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
