import { useState } from "react";
import { useHistory } from "react-router-dom";

import initialIngredients from "../assets/data/initial-ingredients";

export const useBurger = () => {
  const history = useHistory();

  const [ingredients, setIngredients] = useState({
    ...initialIngredients,
    lidBun: 1,
    bottomBun: 1,
  });

  const [isAnalyzed, setStateOfAnalyze] = useState(false);

  const addIngredient = (text) => {
    const oldIngredients = ingredients;

    let updatedIngredientCount;
    if (oldIngredients[text]) {
      updatedIngredientCount = oldIngredients[text] + 1;
    } else {
      updatedIngredientCount = 1;
    }
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[text] = updatedIngredientCount;
    setIngredients(updatedIngredients);
  };

  const fixedIngredients = () => {
    setStateOfAnalyze(true);
    history.push("/burger-maker/analyzed");
  };

  const initBurger = () => {
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
    fixedIngredients,
    initBurger,
  };
};
