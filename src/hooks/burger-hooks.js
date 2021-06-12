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

  const addIngredient = (ingredient) => {
    const oldIngredients = ingredients;

    let updatedIngredientCount;
    if (oldIngredients[ingredient]) {
      updatedIngredientCount = oldIngredients[ingredient] + 1;
    } else {
      updatedIngredientCount = 1;
    }
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[ingredient] = updatedIngredientCount;
    setIngredients(updatedIngredients);
  };

  const removeIngredient = (ingredient) => {
    const oldIngredients = ingredients;
    const updatedIngredientCount = oldIngredients[ingredient] - 1;

    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[ingredient] = updatedIngredientCount;
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
    removeIngredient,
    fixedIngredients,
    initBurger,
  };
};
