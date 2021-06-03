import React from "react";

import "./BurgerText.css";

const BurgerText = () => {
  let transformedIngredients = { text: "burger__text" };
  return <div className="burger__text">{transformedIngredients.text}</div>;
};

export default BurgerText;
