import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="" method="post">
      <InputForm
        title="Full Name"
        type="text"
        name="fullname"
        placeholder="Insert your name here..."
      />
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
      <InputForm
        title="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="******"
      />
      <Button variant="bg-blue-600">Register</Button>
    </form>
  );
};

export default FormRegister;
