import React, { useState } from "react";
import Label from "../components/form/Label";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import { postData } from "../utils/fetchData";

const Register = () => {
  const initailState = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const [user, setUser] = useState(initailState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await postData("register", user);
    console.log(res, "oopppoo");
  };
  const { name, email, password, password_confirmation } = user;

  return (
    <div className=" w-full flex-col flex items-center h-[80vh] bg-slate-900">
      <div className="max-w-xl  text-center font-semibold text-5xl flex flex-col bg-slate-500">
        <h1>Register</h1>
        <form action="" className="mx-auto text-[1.5rem]">
          <div className="mb-4">
            <Label text="اسم المستخدم" elNme="name" />
            <Input
              name="name"
              type="text"
              handleChange={handleChange}
              value={name}
            />
          </div>
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
          <div className="mb-4">
            <Label
              text="تأكيد كلمة السر"
              className=""
              elNme="password_confirmation"
            />
            <Input
              name="password_confirmation"
              value={password_confirmation}
              type="password"
              handleChange={handleChange}
            />
          </div>

          <Button text="تسجيل" className="" handleClick={handleClick} />
        </form>
      </div>
    </div>
  );
};

export default Register;
