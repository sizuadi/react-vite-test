const Input = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      name={name}
      className="text-sm border rounded-sm w-full text-slate-700 placeholder:opacity-50 py-2 px-3"
      placeholder={placeholder}
    />
  );
};

export default Input;
