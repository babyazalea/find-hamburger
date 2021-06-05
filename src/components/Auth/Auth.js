import React from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";

import AuthController from "./AuthController/AuthController";
import Signup from "./Signup/Signup";
import ResetPassword from "./ResetPassword/ResetPassword";
import GoogleLogin from "./GoogleLogin/GoogleLogin";

const Auth = (props) => {
  const { path } = useRouteMatch();

  return (
    <div className="find-hamburger__auth">
      <Switch>
        <Route path={path} exact>
          <AuthController login={props.login} />
        </Route>
        <Route path={`${path}/signup`} exact>
          <Signup />
        </Route>
        <Route path={`${path}/reset-password`} exact>
          <ResetPassword notLoggedIn />
        </Route>
        <Route path={`${path}/google-login`}>
          <GoogleLogin googleLogin={props.googleLogin} />
        </Route>
      </Switch>
    </div>
  );
};

export default Auth;
