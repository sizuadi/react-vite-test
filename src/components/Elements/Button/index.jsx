const Button = (props) => {
  const { children, variant = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-sm ${variant} text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
