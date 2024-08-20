import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="" method="post">
      <InputForm
        title="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
      />
      <InputForm
        title="Password"
        type="password"
        name="password"
        placeholder="******"
      />
      <Button variant="bg-blue-600">Login</Button>
    </form>
  );
};

export default FormLogin;
