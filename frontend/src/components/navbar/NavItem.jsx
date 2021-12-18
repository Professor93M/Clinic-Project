import React from "react";

const NavItem = ({ text, href }) => {
  const isActive = (r) => {
    if (window.location.pathname === r) {
      return "text-gray-700 animate-pulse ";
    } else return "";
  };

  return (
    <li className="font-semibold  flex items-center rounded-md overflow-hidden hover:bg-gray-200 focus:bg-red-200">
      <a href={href} className={`p-2 ${isActive(href)} w-full md:w-auto`}>
        {text}
      </a>
    </li>
  );
};

export default NavItem;
