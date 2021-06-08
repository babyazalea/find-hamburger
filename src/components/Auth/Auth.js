import React from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";

import AuthController from "./AuthController/AuthController";
import Signup from "./Signup/Signup";
import ResetPassword from "./ResetPassword/ResetPassword";

const Auth = (props) => {
  const { path } = useRouteMatch();

  return (
    <div className="find-hamburger__auth">
      <Switch>
        <Route path={path} exact>
          <AuthController login={props.login} />
        </Route>
        <Route path={`${path}/signup`}>
          <Signup />
        </Route>
        <Route path={`${path}/reset-password`}>
          <ResetPassword notLoggedIn />
        </Route>
      </Switch>
    </div>
  );
};

export default Auth;
