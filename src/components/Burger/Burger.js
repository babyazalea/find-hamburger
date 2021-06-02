import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import BurgerAnalyzer from "./BurgerAnalyzer/BurgerAnalyzer";
import BurgerMaker from "./BurgerMaker/BurgerMaker";

const Burger = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={path} exact>
          <BurgerMaker />
        </Route>
        <Route path={`${path}/analyzed`}>
          <BurgerAnalyzer />
        </Route>
      </Switch>
    </div>
  );
};

export default Burger;
