import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      name={name}
      className="text-sm border focus:outline-blue-500 rounded-sm w-full text-slate-700 placeholder:opacity-50 py-2 px-3"
      placeholder={placeholder}
      id={name}
      ref={ref}
    />
  );
});

export default Input;
