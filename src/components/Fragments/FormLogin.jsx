import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res.token);
        navigate("/products");
      }else{
        setLoginFailed(res.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        title="Username"
        type="username"
        name="username"
        placeholder="username"
        ref={usernameRef}
      />
      <InputForm
        title="Password"
        type="password"
        name="password"
        placeholder="******"
      />
      <Button variant="bg-blue-600 w-full">Login</Button>
      {loginFailed && <p className="text-sm text-red-500 text-center mt-3 font-bold">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
