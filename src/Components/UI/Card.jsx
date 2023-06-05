import React from "react";

const Card = ({ children }) => {
  return (
    <div className="h-auto w-auto max-w-5xl bg-white rounded-3xl drop-shadow-xl flex flex-col">
      {children}
    </div>
  );
};

export default Card;
