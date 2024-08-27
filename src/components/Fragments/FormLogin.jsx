import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useEffect, useRef } from "react";

const FormLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);

    navigate("/products");
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        title="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
        ref={emailRef}
      />
      <InputForm
        title="Password"
        type="password"
        name="password"
        placeholder="******"
      />
      <Button variant="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
