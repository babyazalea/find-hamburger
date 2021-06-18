import React from "react";

import "./SavingBurgerName.css";

const SavingBurgerName = (props) => {
  return (
    <React.Fragment>
      <input
        className="my__burger-name-input"
        type="text"
        value={props.myBurgerName}
        onClick={(e) => e.stopPropagation()}
        onChange={props.burgerNameHandler}
      />
      <button onClick={(e) => props.saveBurger(e, props.myBurgerName)}>
        이대로 저장
      </button>
      <button onClick={props.saveCancelHandler}>취소</button>
    </React.Fragment>
  );
};

export default SavingBurgerName;
