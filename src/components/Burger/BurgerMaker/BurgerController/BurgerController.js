import React, { useRef, useState } from "react";

import { convertingText } from "../../../../utils/converting-text";

import "./BurgerController.css";

const BurgerController = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const textInputElement = useRef(null);

  const handleText = () => {
    setEnteredText(textInputElement.current.value);
  };

  const convertingTextAndSubmit = (event, text) => {
    event.preventDefault();
    const ridWhiteSpaceText = text.replace(/\s/g, "");
    const convertedText = convertingText(ridWhiteSpaceText);

    if (convertedText === "") return;

    props.addIngredient(convertedText);
  };

  const clearInput = () => {
    textInputElement.current.value = "";
    setEnteredText("");
  };

  return (
    <div className="burger__controller">
      <div className="burger__input-group">
        <button
          type="button"
          className="ingredient-input__delete-button"
          onClick={clearInput}
        >
          삭제
        </button>
        <form
          id="ingredient__form"
          onSubmit={(event) => {
            convertingTextAndSubmit(event, enteredText);
          }}
        >
          <input
            type="text"
            name="ingredient"
            ref={textInputElement}
            onChange={handleText}
            autoFocus
          />
        </form>
        <button
          type="submit"
          className="ingredient-input__submit-button"
          form="ingredient__form"
          disabled={enteredText === "" || enteredText.trim() === ""}
        >
          추가
        </button>
      </div>
      <div className="burger__controller-buttons">
        <button type="button" onClick={props.initBurger}>
          비우기
        </button>
        <button type="button" onClick={props.fixedIngredients}>
          만들기
        </button>
      </div>
    </div>
  );
};

export default BurgerController;
