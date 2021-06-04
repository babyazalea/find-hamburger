import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Burger from "./components/Burger/Burger";
import Credits from "./components/Credits/Credits";
import Auth from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";
import User from "./components/User/User";

let routes = (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/burger-maker">
      {/* <Burger
                  isLoggedIn={isLoggedIn}
                  isVerified={isVerified}
                  userId={userId}
                /> */}
      <Burger />
    </Route>
    {/* <Route path="/users/reset-password" exact>
                <ResetPassword notLoggedIn={true} />
              </Route> */}
    {/* <Route path="/users/:id/reset-password">
                <ResetPassword userEmail={userEmail} />
              </Route> */}
    <Route path="/credits" exact>
      <Credits />
    </Route>
    <Route path="/users">
      {/* <UserProfile
                  token={token}
                  userId={userId}
                  userName={userName}
                  userEmail={userEmail}
                  photoUrl={photoUrl}
                  updateProfile={updateProfile}
                /> */}
      <User />
    </Route>
    <Route path="/auth" exact>
      <Auth />
    </Route>
    {/* <Route path="/auth/signup" component={Signup} exact />
              <Route path="/auth/google/:token">
                <AuthWithGoogle googleLogin={googleLogin} />
              </Route> */}
  </Switch>
);

const App = () => {
  return (
    <div className="App" id="App">
      <Router>
        <Layout>{routes}</Layout>
      </Router>
    </div>
  );
};

export default App;
