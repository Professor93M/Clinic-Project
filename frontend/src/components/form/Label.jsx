import React from "react";

const Label = ({ elNme, text, className }) => {
  return (
    <label
      className={`${className} capitalize w-full text-right block mr-1 `}
      htmlFor={elNme}
    >
      {text}
    </label>
  );
};

export default Label;
