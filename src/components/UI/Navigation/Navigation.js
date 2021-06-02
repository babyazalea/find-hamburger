import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="doorknob">햄버거 찾기</div>
      <div className="menus">
        <ul>
          <li>
            <Link to="/burger-maker">햄버거 만들기</Link>
          </li>
          <li>
            <Link to="/credits">크레딧</Link>
          </li>
        </ul>
      </div>
      <div className="user__navs">
        <ul>
          <li>
            <Link to="/users">유저</Link>
          </li>
          <li>
            <Link to="/auth">로그인 / 가입</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
