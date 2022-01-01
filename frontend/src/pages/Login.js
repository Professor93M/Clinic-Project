import React, { useState } from "react";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import Label from "../components/form/Label";
import { postData } from "../utils/fetchData";

const Login = () => {
  const initailState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initailState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await postData("register", user);
    console.log(res);
  };
  const { email, password } = user;

  return (
    <div>
      <h1>Login</h1>
      <form action="" className="mx-auto text-[1.5rem]">
        <div className="mb-4">
          <Label text="اسم المستخدم" elNme="email" />
          <Input
            name="email"
            type="email"
            handleChange={handleChange}
            value={email}
          />
        </div>
        <div className="mb-4">
          <Label text="البريد الالكتروني" elNme="password" />
          <Input
            name="password"
            type="password"
            handleChange={handleChange}
            value={password}
          />
        </div>
        <Button text="تسجيل" className="" handleClick={handleClick} />
      </form>
    </div>
  );
};

export default Login;
