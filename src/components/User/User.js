import React from "react";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import UserProfile from "./UserProfile/UserProfile";

const User = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <hr />
      <ul>
        <li>
          <Link to={`${url}/u1`}>user1</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          User
        </Route>
        <Route path={`${path}/:userId`}>
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
};

export default User;
