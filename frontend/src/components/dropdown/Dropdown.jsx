import React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import DropdownArrow from "./DropdownArrow";

const Dropdown = ({ text, toggleShow, isShow, responsive }) => {
  const showDropdown = () => {
    if ((responsive && isShow) || isShow) {
      console.log(isShow);
      return "scale-y-100";
    } else {
      return "scale-y-0";
    }
  };
  return (
    <li
      onClick={toggleShow}
      className="p-2 font-semibold rounded-md overflow-hidden hover:bg-gray-200 focus:bg-red-200"
    >
      <div className="flex  cursor-pointer w-full h-ful items-center space-x-1 md:justify-between justify-center">
        <span> {text} </span>
        <DropdownArrow
          Icon={ChevronDownIcon}
          className={`${
            !isShow ? "" : "transform rotate-180 "
          } w-5 transition-all ease-in-out`}
        />
      </div>
      <ul
        className={`z-50 top-14 ${
          responsive ? "top-32 w-11/12" : ""
        } p-3 rounded-md bg-gray-400 w-32 origin-top transform transition-all  flex-col flex space-y-2 text-gray-300 absolute ${showDropdown()}`}
      >
        <li>clothes</li>
        <li>rooms</li>
        <li>doors</li>
        <li>coolers</li>
      </ul>
    </li>
  );
};

export default Dropdown;
