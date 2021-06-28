import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { storingData } from "../utils/storing-data";

export const useAuth = () => {
  const [idToken, setIdToken] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const history = useHistory();

  const login = (loginData, userData) => {
    loginData.emailVerified = userData["emailVerified"];
    storingData(loginData);

    setIdToken(loginData["idToken"]);
    setUserName(loginData["displayName"]);
    setUserEmail(loginData["email"]);
    setUserId(loginData["localId"]);
    setIsVerified(userData["emailVerified"]);
    setIsLoggedIn(true);

    history.push("/");
  };

  const updateProfile = (responseData) => {
    localStorage.setItem("displayName", responseData["displayName"]);

    setUserName(responseData["displayName"]);

    history.push("/");
  };

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setIsVerified(false);
    localStorage.clear();
    history.push("/");
  }, [history]);

  useEffect(() => {
    const expDate = new Date(localStorage.getItem("expirationDate"));

    if (!expDate || expDate <= new Date()) {
      logout();
    } else {
      setIdToken(localStorage.getItem("idToken"));
      setUserName(localStorage.getItem("displayName"));
      setUserEmail(localStorage.getItem("email"));
      setUserId(localStorage.getItem("localId"));
      setIsVerified(localStorage.getItem("emailVerified"));
      setIsLoggedIn(true);
    }
  }, [logout]);

  return {
    idToken,
    userName,
    userEmail,
    userId,
    isLoggedIn,
    isVerified,
    login,
    updateProfile,
    logout,
  };
};
