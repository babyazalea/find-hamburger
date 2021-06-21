import React, { useState } from "react";

import BaseCard from "../../../../UI/BaseCard/BaseCard";
import BurgerModal from "../../../../UI/BurgerModal/BurgerModal";
import BurgerText from "../../../../Burger/BurgerMaker/BurgerText/BurgerText";

import "./BurgerItem.css";

const BurgerItem = (props) => {
  const [modalState, setModalState] = useState(false);

  const showModal = () => {
    setModalState(true);
  };

  const modalHandler = (prevState) => {
    setModalState(!prevState);
  };

  return (
    <React.Fragment>
      <li className="saved__burger" onClick={showModal}>
        <BaseCard>
          <span>{props.date}</span>
          <p>{props.name}</p>
        </BaseCard>
      </li>
      <BurgerModal isOpen={modalState} closeModal={modalHandler} myBurger>
        <React.Fragment>
          <BurgerText ingredients={props.ingredients} onMyBurger></BurgerText>
        </React.Fragment>
      </BurgerModal>
    </React.Fragment>
  );
};

export default BurgerItem;
