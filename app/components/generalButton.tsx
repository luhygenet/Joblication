import React from "react";

type GeneralButtonProps = {
  font: string;
  color: string;
  border: number;
  borderColor: string;
  fontSize: number;
  fontWeight: number;
  rounded: string;
  w?: number;
  h?: number;
  m: number;
  p: number;
  px: number;
  py: number;
  img?: string;
  textColor: string;
  text: string
};

const GeneralButton = (buttonProps: GeneralButtonProps) => {
  return (
    <button
      style={{
        fontFamily: buttonProps.font,
        fontSize: buttonProps.fontSize,
        fontWeight: buttonProps.fontWeight,
      }}
      className={`${buttonProps.color}  text-center ${
        buttonProps.textColor
      } text-center w-${String(buttonProps.w)} px-${String(buttonProps.px)}  h-${String(
        buttonProps.h
      )} m-${String(buttonProps.m)} border-${String(
        buttonProps.border
      )} border-${buttonProps.borderColor} ${buttonProps.rounded} text-${
        buttonProps.color
      } shadow-sm`}
    >
      <div className={`flex  justify-center  text-center py-${String(buttonProps.py)}`}>
        {buttonProps.img ? (
          <img src={buttonProps.img} alt="green_tick" className="pr-2" />
        ) : (
          <></>
        )}

        <p className="m-1">{buttonProps.text}</p>
      </div>
    </button>
  );
};

export default GeneralButton;
