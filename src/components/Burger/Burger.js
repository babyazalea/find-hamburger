import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { useBurger } from "../../hooks/burger-hooks";

import BurgerAnalyzer from "./BurgerAnalyzer/BurgerAnalyzer";
import BurgerMaker from "./BurgerMaker/BurgerMaker";

const Burger = () => {
  const {
    ingredients,
    isAnalyzed,
    addIngredient,
    clearIngredients,
    fixedIngredients,
    // initBurgerAnalyze,
  } = useBurger();

  const { path } = useRouteMatch();

  return (
    <div className="find-hamburger__burger">
      <Switch>
        <Route path={path} exact>
          <BurgerMaker
            ingredients={ingredients}
            addIngredient={addIngredient}
            clearIngredients={clearIngredients}
            fixedIngredients={fixedIngredients}
          />
        </Route>
        <Route path={`${path}/analyzed`}>
          <BurgerAnalyzer ingredients={ingredients} isAnalyzed={isAnalyzed} />
        </Route>
      </Switch>
    </div>
  );
};

export default Burger;
