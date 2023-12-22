"use Client";
import React from "react";

type PropsType = {
  children: string;
  type: "button" | "submit";
  className: string;
};

export const Button = ({ children, type = "button", className }: PropsType) => {
  return (
    <button
      className={`bg-yellow-500 px-8 py-2 rounded-lg font-bold hover:bg-yellow-400 active:bg-yellow-600 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};
