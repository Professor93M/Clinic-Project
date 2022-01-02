import React, { useState } from "react";
import Swal from "sweetalert2";
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
    Swal.fire({
      title: "هل تريد الاستمرار؟",
      icon: "question",
      iconHtml: "؟",
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      showCancelButton: true,
      showCloseButton: true,
    });
    console.log(res);
  };
  const { email, password } = user;

  return (
    <form>
      <div className="flex items-center justify-center h-[500px]">
        <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
          <h1 className="text-center text-lg font-bold text-gray-500 capitalize">
            login
          </h1>
          <div className="space-y-4 mt-6">
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
            <div className="w-full flex items-center justify-start">
              <Input
                id="remember"
                name="remember"
                type="checkbox"
                handleChange={handleChange}
                value={password}
                className=" bg-gray-50 placeholder:capitalize"
                placeholder="password"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm leading-5 text-gray-900"
              >
                Remember me
              </label>
            </div>
          </div>
          <Button
            text="login"
            handleClick={handleClick}
            className="w-full mt-8 capitalize bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight"
          />
        </div>
      </div>
    </form>
  );
};

export default Login;
