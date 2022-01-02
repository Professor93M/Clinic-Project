import React from "react";

const Input = ({
  type = "text",
  className,
  name,
  placeholder,
  value,
  handleChange,
  id,
}) => {
  return (
    <input
      className={className}
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
