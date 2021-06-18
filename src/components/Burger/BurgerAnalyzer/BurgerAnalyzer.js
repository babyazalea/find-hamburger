import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../context/auth-context";

import MyBurger from "./MyBurger/MyBurger";
import AnalysisResult from "./AnalysisResult/AnalysisResult";
import LoadingDots from "../../UI/LoadingDots/LoadingDots";

import { burgerRanker } from "../../../utils/burger-ranker";

import "./BurgerAnalyzer.css";

const BurgerAnalyzer = (props) => {
  const [scoreBoard, setScoreBoard] = useState(null);

  const authContext = useContext(AuthContext);

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
      {authContext.isVerified ? null : (
        <div className="burger__anlyzer-guide">
          <p>
            <i className="fas fa-exclamation-circle"></i>햄버거 찾기를 통해 찾은
            햄버거를 온라인 서버에 저장하실 수도 있습니다. 저장 기능은, 이메일을
            통한 회원가입 후 이메일 확인을 거치시면 이용이 가능합니다.
          </p>
        </div>
      )}
      {scoreBoard ? (
        <div className="result__board">
          <MyBurger userId={props.userId} ingredients={props.ingredients} />
          <ul>{analyzer}</ul>
        </div>
      ) : (
        <LoadingDots />
      )}
    </div>
  );
};

export default BurgerAnalyzer;
