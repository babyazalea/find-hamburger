import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import "./BurgerText.css";

const BurgerText = (props) => {
  let ingredientsKeys = Object.keys(props.ingredients);

  let transformedIngredients = ingredientsKeys.map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return (
        <BurgerIngredient
          key={igKey + i}
          type={igKey}
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
        />
      );
    });
  });

  return (
    <div className={`burger__text${props.onMyBurger ? " in__my-burger" : ""}`}>
      {transformedIngredients}
    </div>
  );
};

export default BurgerText;
