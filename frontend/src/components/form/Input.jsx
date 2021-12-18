import React from "react";

const Input = ({
  type = "text",
  className,
  name,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <input
      className={`${className} w-full rounded-lg`}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
