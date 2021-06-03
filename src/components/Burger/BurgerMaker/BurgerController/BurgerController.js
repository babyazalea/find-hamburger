import React, { useRef, useState } from "react";

import "./BurgerController.css";

const BurgerController = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const textInputElement = useRef(null);

  const handleText = () => setEnteredText(textInputElement.current.value);

  return (
    <div className="burger__controller">
      <button type="button" className="ingredient-input__delete-button">
        삭제
      </button>
      <form
        id="ingredient__form"
        onSubmit={(event) => {
          props.addIngredient(event, enteredText);
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
      >
        추가
      </button>
      <div className="burger__controller-buttons">
        <button type="button" onClick={props.clearIngredients}>
          전부 비우기
        </button>
        <button type="button" onClick={props.fixedIngredients}>
          만들기
        </button>
      </div>
    </div>
  );
};

export default BurgerController;
