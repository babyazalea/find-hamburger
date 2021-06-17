import React, { useContext } from "react";

import { AuthContext } from "../../../context/auth-context";

import "./BurgerSaveButton.css";

const BurgerSaveButton = () => {
  const authContext = useContext(AuthContext);

  return (
    <React.Fragment>
      {authContext.isLoggedIn && authContext.isVerified ? (
        <button className="burger-save__button">
          <i className="fas fa-save"></i>
        </button>
      ) : null}
    </React.Fragment>
  );
};

export default BurgerSaveButton;
