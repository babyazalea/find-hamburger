import React from "react";

import BurgerController from "./BurgerController/BurgerController";
import BurgerText from "./BurgerText/BurgerText";

import "./BurgerMaker.css";

const BurgerMaker = (props) => {
  return (
    <div className="burger__maker">
      <BurgerController
        addIngredient={props.addIngredient}
        clearIngredients={props.clearIngredients}
        fixedIngredients={props.fixedIngredients}
        initBurger={props.initBurger}
      />
      <BurgerText
        ingredients={props.ingredients}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
    </div>
  );
};

export default BurgerMaker;
