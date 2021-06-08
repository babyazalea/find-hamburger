import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";

import Home from "./components/Home/Home";
import Burger from "./components/Burger/Burger";
import Credits from "./components/Credits/Credits";
import Auth from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";
import User from "./components/User/User";

const App = () => {
  const {
    idToken,
    userName,
    userEmail,
    photoUrl,
    userId,
    isLoggedIn,
    isVerified,
    login,
    googleLogin,
    updateProfile,
    logout,
  } = useAuth();

  let routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/burger-maker">
        <Burger />
      </Route>
      <Route path="/credits" exact>
        <Credits />
      </Route>
      <Route path="/users/:userId">
        <User
          idToken={idToken}
          userName={userName}
          userEmail={userEmail}
          photoUrl={photoUrl}
          updateProfile={updateProfile}
          logout={logout}
        />
      </Route>
      <Route path="/auth">
        <Auth login={login} />
      </Route>
    </Switch>
  );

  return (
    <div className="App" id="App">
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, isVerified: isVerified }}
      >
        <Layout
          userName={userName}
          userId={userId}
          photoUrl={photoUrl}
          logout={logout}
        >
          {routes}
        </Layout>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
