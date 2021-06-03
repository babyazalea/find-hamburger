import React from "react";

import "./BurgerController.css";

const BurgerController = () => {
  return (
    <div className="burger__controller">
      <button type="button" className="ingredient-input__delete-button">
        삭제
      </button>
      <input type="text" name="ingredient" autoFocus />
      <button type="submit" className="ingredient-input__submit-button">
        추가
      </button>
      <div className="burger__controller-buttons">
        <button type="button">전부 비우기</button>
        <button type="button">만들기</button>
      </div>
    </div>
  );
};

export default BurgerController;
