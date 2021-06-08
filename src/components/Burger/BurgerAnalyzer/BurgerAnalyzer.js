import React, { useEffect, useState } from "react";

import MyBurger from "./MyBurger/MyBurger";
import AnalysisResult from "./AnalysisResult/AnalysisResult";
import LoadingDots from "../../UI/LoadingDots/LoadingDots";

import { burgerRanker } from "../../../utils/burger-ranker";

import "./BurgerAnalyzer.css";

const BurgerAnalyzer = (props) => {
  const [scoreBoard, setScoreBoard] = useState(null);

  useEffect(() => {
    setScoreBoard(burgerRanker(props.ingredients));
  }, [props.ingredients]);

  let sortedScoreBoard;

  if (scoreBoard) {
    sortedScoreBoard = scoreBoard
      .sort(function (a, b) {
        if (a.score > b.score) {
          return -1;
        }

        if (a.score < b.score) {
          return 1;
        }

        return 0;
      })
      .slice(0, 3);
  }

  let analyzer = <p>not...ok</p>;

  if (props.isAnalyzed && sortedScoreBoard) {
    analyzer = sortedScoreBoard.map((burgerResult, index) => {
      return (
        <AnalysisResult
          key={burgerResult.name + index}
          name={burgerResult.name}
          index={index}
          score={burgerResult.score}
          realBurger={burgerResult.realBurger}
        />
      );
    });
  }

  return (
    <div className="burger__analyzer">
      {scoreBoard ? (
        <div className="result__board">
          <MyBurger ingredients={props.ingredients} />
          <ul>{analyzer}</ul>
        </div>
      ) : (
        <LoadingDots />
      )}
    </div>
  );
};

export default BurgerAnalyzer;
