import React from "react";

import BurgerController from "./BurgerController/BurgerController";
import BurgerText from "./BurgerText/BurgerText";

import "./BurgerMaker.css";

const BurgerMaker = () => {
  return (
    <div className="burger__maker">
      <BurgerController />
      <BurgerText />
    </div>
  );
};

export default BurgerMaker;
