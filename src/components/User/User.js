import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import UserProfile from "./UserProfile/UserProfile";
import UserBurgers from "./UserBurgers/UserBurgers";
import ResetPassword from "../Auth/ResetPassword/ResetPassword";

const User = (props) => {
  const { path } = useRouteMatch();

  return (
    <div className="find-hamburger__user">
      <Switch>
        <Route exact path={path}>
          <UserProfile
            userEmail={props.userEmail}
            userName={props.userName}
            photoUrl={props.photoUrl}
            idToken={props.idToken}
            updateProfile={props.updateProfile}
          />
        </Route>
        <Route path={`${path}/user-burgers`}>
          <UserBurgers />
        </Route>
        <Route path={`${path}/reset-password`}>
          <ResetPassword notLoggedIn={false} />
        </Route>
      </Switch>
    </div>
  );
};

export default User;
