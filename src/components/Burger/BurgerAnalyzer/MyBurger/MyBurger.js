import React, { useState } from "react";

import BurgerText from "../../BurgerMaker/BurgerText/BurgerText";
import BaseCard from "../../../UI/BaseCard/BaseCard";
import BurgerModal from "../../../UI/BurgerModal/BurgerModal";

import "./MyBurger.css";

const MyBurger = (props) => {
  const [modalState, setModalState] = useState(false);

  const showModal = () => {
    setModalState(true);
  };

  const closeModal = (prevState) => {
    setModalState(!prevState);
  };

  return (
    <React.Fragment>
      <BaseCard customClassName="my__burger" onClick={showModal}>
        <span>내가만든버거</span>
        <h1>🍔</h1>
      </BaseCard>
      <BurgerModal isOpen={modalState} closeModal={closeModal} myBurger>
        <BurgerText ingredients={props.ingredients} />
      </BurgerModal>
    </React.Fragment>
  );
};

export default MyBurger;
