import burgers from "../assets/data/burgers-data";

export const burgerRanker = (userIngs) => {
  let scoreBoard = [];

  const burgerKeys = Object.keys(burgers);

  const scoringFunction = (userIngs, burgerIngs) => {
    let score = 100;

    const userIngsKeys = Object.keys(userIngs);

    userIngsKeys.forEach((key) => {
      if (userIngs[key] !== burgerIngs[key]) {
        score -= 1;
      }
    });

    return score;
  };

  for (let burgerKey in burgerKeys) {
    const burgerName = burgerKeys[burgerKey];
    let score = scoringFunction(userIngs, burgers[burgerName]);

    const burgerResult = {
      name: burgerName,
      score: burgers[burgerName].realBurger ? (score += 1) : score,
      realBurger: burgers[burgerName].realBurger
        ? burgers[burgerName].realBurger
        : null,
    };
    scoreBoard.push(burgerResult);
  }

  return scoreBoard;
};
