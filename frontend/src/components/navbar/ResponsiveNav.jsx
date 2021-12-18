import React from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import Button from "../form/Button";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Dropdown from "../dropdown/Dropdown";

const ResponsiveNav = ({ isOpen, toggleNav, isShow, toggleShow }) => {
  return (
    <div style={{ height: "10vh" }} className="sm:hidden z-50">
      <div className="flex h-full transition-all px-4 max-w-5xl mx-auto items-center justify-between">
        <Logo logo="Logo" />
        <Button
          handleClick={toggleNav}
          className="w-12 hover:bg-gray-200 rounded-full s p-2 transition-all ease-in-out duration-300"
          Icon={isOpen ? XIcon : MenuAlt1Icon}
        />
      </div>

      <div
        style={{
          zIndex: isOpen ? "100" : "-3",
          width: isOpen ? "100%" : "0",
          height: "90vh",
          top: "4.4rem",
        }}
        className="flex bg-gray-600 absolute bg-opacity-50 transition-all ease-in-out duration-500   bottom-0 left-0 text-center justify-end right-0 overflow-hidden"
      >
        <ul
          style={{
            minWidth: "200px",
            height: "90vh",
            backgroundColor: "#f9f9ff",
            right: isOpen ? "0" : "-1000px",
            transition: "all ease-in-out .7s",
          }}
          className={`flex  absolute divide-y flex-col z-30 capitalize`}
        >
          <NavItem href="/" text="home" />
          <NavItem href="/about" text="about" />
          <Dropdown
            text="catagories"
            isShow={isShow}
            responsive={isOpen ? "true" : "false"}
            toggleShow={toggleShow}
          />
          <NavItem href="/contact" text="contact" />
          <NavItem href="/login" text="login" />
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveNav;
