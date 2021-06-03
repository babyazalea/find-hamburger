import { useState } from "react";

import initialIngredients from "../assets/data/initial-ingredients";

import { convertingText } from "../utils/converting-text";

export const useBurger = () => {
  const [ingredients, setIngredients] = useState({
    ...initialIngredients,
    lidBun: 1,
    bottomBun: 1,
  });

  const [isAnalyzed, setStateOfAnalyze] = useState(false);

  const addIngredient = (event, text) => {
    event.preventDefault();
    const oldIngredients = ingredients;
    const convertedTextArg = text.replace(/\s/g, "");

    const convertedText = convertingText(convertedTextArg);

    let updatedIngredientCount;
    if (oldIngredients[convertedText]) {
      updatedIngredientCount = oldIngredients[convertedText] + 1;
    } else {
      updatedIngredientCount = 1;
    }
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[convertedText] = updatedIngredientCount;
    setIngredients(updatedIngredients);
  };

  const clearIngredients = () => {
    setIngredients({
      ...initialIngredients,
      lidBun: 1,
      bottomBun: 1,
    });
  };

  const fixedIngredients = () => {
    setStateOfAnalyze(true);
  };

  const initBurgerAnalyze = () => {
    setStateOfAnalyze(false);
    setIngredients({
      ...initialIngredients,
      lidBun: 1,
      bottomBun: 1,
    });
  };

  return {
    ingredients,
    isAnalyzed,
    addIngredient,
    clearIngredients,
    fixedIngredients,
    initBurgerAnalyze,
  };
};
