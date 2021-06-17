import React, { useState } from "react";

import BurgerText from "../../BurgerMaker/BurgerText/BurgerText";
import BaseCard from "../../../UI/BaseCard/BaseCard";
import BurgerModal from "../../../UI/BurgerModal/BurgerModal";
import BurgerSaveButton from "../../../UI/BurgerSaveButton/BurgerSaveButton";

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
        <p>방금 만든 버거</p>
        <h1>🍔</h1>
        <BurgerSaveButton />
      </BaseCard>
      <BurgerModal isOpen={modalState} closeModal={closeModal} myBurger>
        <BurgerText ingredients={props.ingredients} onMyBurger />
      </BurgerModal>
    </React.Fragment>
  );
};

export default MyBurger;
