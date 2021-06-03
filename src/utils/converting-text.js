export const convertingText = (text) => {
  switch (text) {
    // lidBun
    case "뚜껑":
    case "top":
      return "lidBun";
    // cheese
    case "치즈":
    case "노랑":
    case "cheese":
      return "cheese";
    // hamburg patty
    case "패티":
    case "고기":
    case "고기패티":
    case "hamburgpatty":
      return "hamburgPatty";
    // pork patty
    case "돼지고기":
    case "돼지고기패티":
    case "porkpatty":
      return "porkPatty";
    // beef patty
    case "소고기":
    case "소고기패티":
    case "beefpatty":
      return "beefPatty";
    // chiken patty
    case "치킨":
    case "치킨패티":
    case "chickenpatty":
      return "chickenPatty";
    // fish patty
    case "새우":
    case "새우패티":
    case "명태":
    case "shrimppatty":
      return "shrimpPatty";
    // vegetable patty
    case "비건패티":
    case "식물성패티":
    case "vegetablepatty":
      return "vegetablePatty";
    // lettuce
    case "양상추":
    case "채소":
    case "풀":
    case "lettuce":
      return "lettuce";
    // pickle
    case "피클":
    case "오이":
    case "pickle":
      return "pickle";
    // onion
    case "양파":
    case "onion":
      return "onion";
    // tomato
    case "토마토":
    case "tomato":
      return "tomato";
    // spicy sauce
    case "매운맛":
    case "매운맛소스":
    case "매운":
    case "고추장베이스":
    case "spicysauce":
      return "spicySauce";
    // bicMac sauce
    case "빅맥소스":
    case "bicmacsauce":
      return "bicmacSauce";
    // teriyaki sauce
    case "데리야끼":
    case "데리야끼소스":
    case "teriyakisauce":
      return "teriyakiSauce";
    // ketchup sauce
    case "기본소스":
    case "케첩":
    case "케첩소스":
    case "ketchupsauce":
      return "ketchupSauce";
    // mayonnaise sauce
    case "마요":
    case "마요소스":
    case "mayosauce":
      return "mayoSauce";
    // extra bread
    case "빵":
      return "extraBread";
    // hash brown
    case "해쉬브라운":
    case "감자":
      return "hashBrown";
    // bottomBun
    case "받침대":
    case "bottom":
      return "bottomBun";
    default:
      return "";
  }
};
