import initialIngredients from "./initial-ingredients";

const brands = {
  mcdonalds: {
    brandName: "mcdonalds",
    url: "https://www.mcdonalds.co.kr/kor/main.do",
  },
  burgerking: {
    brandName: "burgerking",
    url: "https://www.burgerking.co.kr/",
  },
  lotteria: {
    brandName: "lotteria",
    url: "http://www.lotteria.com/index.asp",
  },
  kfc: {
    brandName: "kfc",
    url: "https://www.kfckorea.com/",
  },
  momstouch: {
    brandName: "momstouch",
    url: "https://www.momstouch.co.kr/",
  },
  shakeshack: {
    brandName: "shakeshack",
    url: "http://www.shakeshack.kr/",
  },
};

const burgers = {
  "리얼 와퍼": {
    ...initialIngredients,
    onion: 1,
    tomato: 1,
    pickle: 1,
    lettuce: 1,
    ketchupSauce: 1,
    mayoSauce: 1,
    beefPatty: 1,
    realBurger: brands.burgerking,
  },
  스태커4와퍼: {
    ...initialIngredients,
    onion: 1,
    tomato: 1,
    pickle: 1,
    lettuce: 1,
    cheese: 4,
    ketchupSauce: 2,
    mayoSauce: 1,
    beefPatty: 4,
    realBurger: brands.burgerking,
  },
  더블X2: {
    ...initialIngredients,
    pickle: 1,
    lettuce: 1,
    onion: 1,
    cheese: 2,
    ketchupSauce: 1,
    beefPatty: 2,
    realBurger: brands.lotteria,
  },
  새우버거: {
    ...initialIngredients,
    lettuce: 1,
    mayoSauce: 1,
    shrimpPatty: 1,
    realBurger: brands.lotteria,
  },
  타워버거: {
    ...initialIngredients,
    lettuce: 1,
    mayoSauce: 1,
    cheese: 1,
    hashBrown: 1,
    chickenPatty: 1,
    ketchupSauce: 1,
    realBurger: brands.kfc,
  },
  싸이버거: {
    ...initialIngredients,
    lettuce: 1,
    pickle: 1,
    onion: 1,
    chickenPatty: 1,
    mayoSauce: 1,
    realBurger: brands.momstouch,
  },
  쉑버거: {
    ...initialIngredients,
    lettuce: 1,
    tomato: 1,
    cheese: 1,
    beefPatty: 1,
    realBurger: brands.shakeshack,
  },
  빅맥: {
    ...initialIngredients,
    beefPatty: 2,
    lettuce: 2,
    extraBread: 1,
    bicMacSauce: 1,
    cheese: 1,
    pickle: 1,
    realBurger: brands.mcdonalds,
  },
  "더블 불고기 버거": {
    ...initialIngredients,
    lettuce: 1,
    mayoSauce: 1,
    teriyakiSauce: 1,
    cheese: 1,
    porkPatty: 2,
    realBurger: brands.mcdonalds,
  },
};

export default burgers;
