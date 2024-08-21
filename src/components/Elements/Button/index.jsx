const Button = (props) => {
  const { children, variant = "bg-black", onClick = () => {} } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-sm ${variant} text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
