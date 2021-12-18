import React from "react";

const Button = ({ Icon, className, handleClick, text }) => {
  const renderContent = () => {
    if (text) {
      return (
        <button onClick={handleClick} className={className}>
          {text}
        </button>
      );
    } else if (Icon) {
      return (
        <button onClick={handleClick} className={className}>
          <Icon />
        </button>
      );
    } else {
      return null;
    }
  };

  return renderContent();
};

export default Button;
