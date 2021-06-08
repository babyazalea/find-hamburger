import React, { useRef, useState } from "react";

import { convertingText } from "../../../../utils/converting-text";

import "./BurgerController.css";

const BurgerController = (props) => {
  const [ingText, setIngText] = useState("");
  const textInputElement = useRef(null);

  const handleText = () => {
    const enteredText = textInputElement.current.value;
    const ridWhiteSpaceText = enteredText.replace(/\s/g, "");
    const convertedText = convertingText(ridWhiteSpaceText);

    setIngText(convertedText);
  };

  const handleConvertedText = (event, text) => {
    event.preventDefault();

    props.addIngredient(text);
  };

  const clearInput = () => {
    textInputElement.current.value = "";
    setIngText("");
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
            handleConvertedText(event, ingText);
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
          disabled={ingText === "" || ingText.trim() === ""}
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
