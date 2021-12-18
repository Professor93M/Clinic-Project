import React from "react";
import Logo from "./navbar/Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full h-max bg-gray-300 text-gray-600 capitalize">
      <div className="flex md:flex-row flex-col justify-around py-4 mx-auto space-y-4 md:space-y-0 w-3/4 h-full ">
        <div className="logo-and-desc">
          <Logo logo="Logo" />
          <div className="pl-3">
            <h1>kopdoqkdpodddok</h1>
          </div>
        </div>
        <div className="logo-and-desc">
          <h2 className="font-bold">links</h2>
          <div className="flex flex-col w-max pl-3 ">
            <a href="/">link</a>
            <a href="/">link</a>
            <a href="/">link</a>
            <a href="/">link</a>
          </div>
        </div>
        <div className="logo-and-desc">
          <h2 className="font-bold">icons</h2>
          <div className="flex flex-col w-max pl-3 ">
            <a href="/">icon</a>
            <a href="/">icon</a>
            <a href="/">icon</a>
            <a href="/">icon</a>
          </div>
        </div>
      </div>
      <div className="copy w-full text-center text-gray-400">
        <p className="bg-gray-600 w-full py-4">
          &copy; {new Date().getFullYear()} Kopdoqkdpodddok
        </p>
      </div>
    </footer>
  );
};

export default Footer;
