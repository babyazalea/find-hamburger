import React from "react";

import "./BurgerIngredient.css";

const BurgerIngredient = (props) => {
  let ingredient = null;

  const ingredientLayout = (ingClassName, ingredientText) => {
    return (
      <div className={`ingredient ${ingClassName}`}>
        <button
          className="ingredient__add-button"
          onClick={() => props.addIngredient(props.type)}
        >
          <i className="fas fa-plus-circle"></i>
        </button>
        <h2>{ingredientText}</h2>
        <button
          className="ingredient__remove-button"
          onClick={() => props.removeIngredient(props.type)}
        >
          <i className="fas fa-minus-circle"></i>
        </button>
      </div>
    );
  };

  switch (props.type) {
    case "lidBun":
      ingredient = ingredientLayout("lid-bun", "뚜껑");
      break;
    case "cheese":
      ingredient = ingredientLayout("cheese", "치즈");
      break;
    case "lettuce":
      ingredient = ingredientLayout("lettuce", "양상추");
      break;
    case "pickle":
      ingredient = ingredientLayout("pickle", "피클");
      break;
    case "onion":
      ingredient = ingredientLayout("onion", "양파");
      break;
    case "tomato":
      ingredient = ingredientLayout("tomato", "토마토");
      break;
    case "spicySauce":
      ingredient = ingredientLayout("spicy-sauce", "매운 소스");
      break;
    case "bicmacSauce":
      ingredient = ingredientLayout("bicmac-sauce", "빅맥 소스");
      break;
    case "teriyakiSauce":
      ingredient = ingredientLayout("teriyaki-sauce", "데리야키 소스");
      break;
    case "ketchupSauce":
      ingredient = ingredientLayout("ketchup-sauce", "케쳡 소스");
      break;
    case "mayoSauce":
      ingredient = ingredientLayout("mayo-sauce", "마요 소스");
      break;
    case "hamburgPatty":
      ingredient = ingredientLayout("hamburg-patty", "햄버그 패티");
      break;
    case "porkPatty":
      ingredient = ingredientLayout("pork-patty", "돼지고기 패티");
      break;
    case "beefPatty":
      ingredient = ingredientLayout("beef-patty", "소고기 패티");
      break;
    case "shrimpPatty":
      ingredient = ingredientLayout("shrimp-patty", "새우 패티");
      break;
    case "chickenPatty":
      ingredient = ingredientLayout("chicken-patty", "치킨 패티");
      break;
    case "vegetablePatty":
      ingredient = ingredientLayout("vegetable-patty", "비건 패티");
      break;
    case "extraBread":
      ingredient = ingredientLayout("extra-bread", "빵");
      break;
    case "hashBrown":
      ingredient = ingredientLayout("hash-brown", "해시브라운");
      break;
    case "bottomBun":
      ingredient = ingredientLayout("bottom-bun", "받침대");
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

export default BurgerIngredient;
