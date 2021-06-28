import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../context/auth-context";

import "./Navigation.css";

const Navigation = (props) => {
  const authContext = useContext(AuthContext);

  return (
    <nav>
      <div className="doorknob">
        <Link to="/">
          <span className="responsive__full">햄버거 찾기</span>
          <span className="responsive__small">
            <i className="fas fa-hamburger"></i>
          </span>
        </Link>
      </div>
      <div className="menus">
        <ul>
          <li>
            <Link to="/burger-maker">
              <span className="responsive__full">햄버거 만들기</span>
              <span className="responsive__small">
                <i className="fas fa-plus"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/credits">
              <span className="responsive__full">크레딧</span>
              <span className="responsive__small">
                <i className="fas fa-exclamation-circle"></i>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="user__navs">
        <ul>
          {authContext.isLoggedIn ? (
            <React.Fragment>
              <li>
                <Link to={`/users/${props.userId}`}>
                  <div className="user-name__display">
                    <i className="fas fa-user-circle" />
                    {props.userName !== "" ? (
                      <span>{props.userName}</span>
                    ) : (
                      <span>이름 없음</span>
                    )}
                  </div>
                </Link>
              </li>
              <li>
                <button className="logout__btn" onClick={props.logout}>
                  <span className="responsive__full">로그아웃</span>
                  <span className="responsive__small">
                    <i className="fas fa-sign-out-alt"></i>
                  </span>
                </button>
              </li>
            </React.Fragment>
          ) : (
            <li>
              <Link to="/auth">로그인 / 가입</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
