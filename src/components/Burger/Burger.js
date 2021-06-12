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
    removeIngredient,
    clearIngredients,
    fixedIngredients,
    initBurger,
  } = useBurger();

  const { path } = useRouteMatch();

  return (
    <div className="find-hamburger__burger">
      <Switch>
        <Route path={path} exact>
          <BurgerMaker
            ingredients={ingredients}
            addIngredient={addIngredient}
            removeIngredient={removeIngredient}
            clearIngredients={clearIngredients}
            fixedIngredients={fixedIngredients}
            initBurger={initBurger}
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
