import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import "./BurgerText.css";

const BurgerText = (props) => {
  let ingredientsKeys = Object.keys(props.ingredients);

  let transformedIngredients = ingredientsKeys.map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });

  return <div>{transformedIngredients}</div>;
};

export default BurgerText;
