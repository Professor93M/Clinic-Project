import React, { useState } from "react";
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
  };
  const { name, email, password, password_confirmation } = user;

  return (
    <form>
      <div className="flex items-center justify-center h-[500px]">
        <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
          <h1 className="text-center text-lg font-bold capitalize text-gray-500">
            register
          </h1>
          <div className="space-y-4 mt-6">
            <div className="w-full">
              <Input
                name="name"
                handleChange={handleChange}
                value={name}
                className="px-4 py-2 bg-gray-50 placeholder:capitalize"
                placeholder="full name"
              />
            </div>
            <div className="w-full">
              <Input
                name="email"
                type="email"
                handleChange={handleChange}
                value={email}
                className="px-4 py-2 bg-gray-50 placeholder:capitalize"
                placeholder="email"
              />
            </div>
            <div className="w-full">
              <Input
                name="password"
                type="password"
                handleChange={handleChange}
                value={password}
                className="px-4 py-2 bg-gray-50 placeholder:capitalize"
                placeholder="password"
              />
            </div>
            <div className="w-full">
              <Input
                name="password_confirmation"
                type="password"
                handleChange={handleChange}
                value={password_confirmation}
                className="px-4 py-2 bg-gray-50 placeholder:capitalize"
                placeholder="password confirmation"
              />
            </div>
          </div>
          <Button
            text="register"
            handleClick={handleClick}
            className="w-full mt-5 capitalize bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight"
          />
        </div>
      </div>
    </form>
  );
};

export default Register;
