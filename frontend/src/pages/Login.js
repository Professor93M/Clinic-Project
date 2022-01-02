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
    const res = await postData("login", user);
    console.log(res, "oopk");
  };
  const { email, password } = user;

  return (
    <div className=" w-full flex-col flex items-center h-[80vh] bg-slate-900">
      <div className="max-w-xl  text-center font-semibold text-5xl flex flex-col bg-slate-500">
        <h1>Login</h1>
        <form action="" className="mx-auto text-[1.5rem]">
          <div className="mb-4">
            <Label text="البريد الالكتروني" elNme="email" />
            <Input
              name="email"
              type="email"
              handleChange={handleChange}
              value={email}
            />
          </div>
          <div className="mb-4">
            <Label text="الرمز السري" elNme="password" />
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
    </div>
  );
};

export default Login;
