import React from "react";
import Dropdown from "../dropdown/Dropdown";
import Logo from "./Logo";
import NavItem from "./NavItem";

const NavBar = ({ isShow, toggleShow }) => {
  return (
    <div style={{ height: "10vh" }} className="hidden sm:block">
      <div className="flex h-full  xl:max-w-6xl lg:max-w-5xl md:max-w-3xl mx-auto items-center md:justify-between sm:justify-around">
        <Logo logo="Logo" />
        <ul className="flex md:space-x-6 sm:space-x-1 capitalize justify-around">
          <NavItem href="/" text="booking" />
          <NavItem href="/about" text="profile" />
          {/* <NavItem href="/contact" text="contact" />
          <Dropdown text="catagories" isShow={isShow} toggleShow={toggleShow} />
          <NavItem href="/login" text="login" /> */}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
