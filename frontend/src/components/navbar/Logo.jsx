import React from "react";

const Logo = ({ logo }) => {
  return (
    <a className="font-bold text-xl px-4" href="/">
      {logo}
    </a>
  );
};

export default Logo;
