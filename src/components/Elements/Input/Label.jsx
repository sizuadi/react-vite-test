const Label = ({ children, name }) => {
  return (
    <label
      htmlFor={name}
      className="block text-slate-700 text-sm font-bold mb-2"
    >
      {children}
    </label>
  );
};

export default Label;
