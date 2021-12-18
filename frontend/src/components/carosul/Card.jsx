import React from "react";
import Button from "../form/Button";

const Card = ({ img, alt, name, text, buttonsNum, btnText }) => {
  const generateButtons = (n) => {
    let buttons = [];
    for (let i = 0; i < n; i++) {
      buttons.push(
        <Button
          text={btnText[i]}
          className={`bg-gray-500 transition-all ease-in-out duration-200  hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded-md`}
          key={i}
        ></Button>
      );
    }
    return buttons;
  };

  return (
    <div className="w-60 overflow-hidden group  bg-gray-100 p-1 rounded-md">
      <div className="cardhead rounded-md w-full overflow-hidden">
        <img src={img} className="object-cover" alt={alt} />
      </div>
      <div className="flex  flex-col justify-between h-40 pt-2">
        <div className="cardtext flex text-md flex-col justify-around h-16">
          <h3 className="text-center capitalize text-xl">{name}</h3>
          <span className="w-20 rounded-md mx-auto h-px bg-gray-300"></span>
          <p className="pl-3">{text}</p>
        </div>
        <div className="flex px-3 text-lg flex-grow items-end pb-3 justify-between">
          {generateButtons(buttonsNum)}
        </div>
      </div>
    </div>
  );
};

export default Card;
