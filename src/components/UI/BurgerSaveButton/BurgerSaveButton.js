import React, { useContext } from "react";

import { AuthContext } from "../../../context/auth-context";

import "./BurgerSaveButton.css";

const BurgerSaveButton = (props) => {
  const authContext = useContext(AuthContext);

  const onSaveBurger = (event) => {
    event.stopPropagation();
    props.saveModeHandler();
  };

  return (
    <React.Fragment>
      {authContext.isLoggedIn && authContext.isVerified ? (
        <button className="burger-save__button" onClick={onSaveBurger}>
          <i className="fas fa-save"></i>
        </button>
      ) : null}
    </React.Fragment>
  );
};

export default BurgerSaveButton;
