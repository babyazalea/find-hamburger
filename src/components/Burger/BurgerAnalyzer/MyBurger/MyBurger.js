import React, { useState } from "react";

import LoadingDots from "../../../UI/LoadingDots/LoadingDots";
import BaseCard from "../../../UI/BaseCard/BaseCard";
import BurgerSaveButton from "../../../UI/BurgerSaveButton/BurgerSaveButton";
import SavingBurgerName from "./SavingBurgerName/SavingBurgerName";
import BurgerText from "../../BurgerMaker/BurgerText/BurgerText";
import BurgerModal from "../../../UI/BurgerModal/BurgerModal";
import ErrorModal from "../../../UI/ErrorModal/ErrorModal";

import "./MyBurger.css";
import { useHttp } from "../../../../hooks/http-hook";

const MyBurger = (props) => {
  const [myBurgerName, setMyBurgerName] = useState("방금 만든 버거");
  const [modalState, setModalState] = useState(false);
  const [saveMode, setSaveMode] = useState(false);

  const { isLoading, error, initializeError, sendPostRequest } = useHttp();

  const showModal = () => {
    setModalState(true);
  };

  const closeModal = (prevState) => {
    initializeError();
    setModalState(!prevState);
  };

  const burgerNameHandler = (event) => {
    const {
      target: { value },
    } = event;
    setMyBurgerName(value);
  };

  const saveModeHandler = () => {
    setSaveMode(true);
  };

  const saveCancelHandler = (event) => {
    event.stopPropagation();
    setSaveMode(false);
  };

  const saveBurger = async (event, burgerName) => {
    event.stopPropagation();
    const url = `https://burger-finder-6bddb-default-rtdb.firebaseio.com/burgers.json`;

    const data = {
      userBurgerName: burgerName,
      userId: props.userId,
      ingredients: props.ingredients,
      createdAt: Date.now(),
    };

    try {
      const responseData = await sendPostRequest(url, data);
      if (responseData.name) {
        setMyBurgerName(burgerName);
        setSaveMode(false);
      } else {
        setSaveMode(false);
      }
    } catch (err) {}
  };

  const confirmError = () => {
    initializeError();
  };

  return (
    <React.Fragment>
      <BaseCard customClassName="my__burger" onClick={showModal}>
        <div className="my__burger-name">
          {saveMode ? (
            <React.Fragment>
              {isLoading ? (
                <LoadingDots />
              ) : (
                <SavingBurgerName
                  myBurgerName={myBurgerName}
                  burgerNameHandler={burgerNameHandler}
                  saveBurger={saveBurger}
                  saveCancelHandler={saveCancelHandler}
                />
              )}
            </React.Fragment>
          ) : (
            <span>{myBurgerName}</span>
          )}
        </div>
        <h1 className="burger__emoji">🍔</h1>
        {saveMode ? null : (
          <BurgerSaveButton saveModeHandler={saveModeHandler} />
        )}
      </BaseCard>
      <BurgerModal isOpen={modalState} closeModal={closeModal} myBurger>
        <React.Fragment>
          <BurgerText ingredients={props.ingredients} onMyBurger></BurgerText>
        </React.Fragment>
      </BurgerModal>
      <ErrorModal error={error} close={confirmError} />
    </React.Fragment>
  );
};

export default MyBurger;
