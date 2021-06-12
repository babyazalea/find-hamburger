import React from "react";
import { Link } from "react-router-dom";

import BaseCard from "../UI/BaseCard/BaseCard";

import guideGif from "../../assets/images/find-hambuger__test-guide.gif";
import "./Home.css";

const Home = () => {
  return (
    <div className="find-hamburger__home">
      <BaseCard>
        <img src={guideGif} alt="가이드" />
      </BaseCard>
      <h4>원하는 재료가 들어간 햄버거를 찾을 수 있습니다.</h4>
      <Link className="go-to-maker" to="/burger-maker">
        <button>
          <span>햄버거 만들기</span>
          <i className="fas fa-arrow-circle-right" />
        </button>
      </Link>
    </div>
  );
};

export default Home;
