import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../context/auth-context";

import { icons } from "../../../assets/icons/icons";
import "./Navigation.css";

const Navigation = (props) => {
  const authContext = useContext(AuthContext);

  return (
    <nav>
      <div className="doorknob">
        <Link to="/">햄버거 찾기</Link>
      </div>
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
          {authContext.isLoggedIn ? (
            <React.Fragment>
              <li>
                <Link to={`/users/${props.userId}`}>
                  <div className="user-name__display">
                    {/* {props.photoUrl !== null ? (
                      <img src={props.photoUrl} alt="유저 사진" />
                    ) : (
                      icons("user-circle")
                    )} */}
                    {icons("user-circle")}
                    {props.userName !== "" ? (
                      <span>{props.userName}</span>
                    ) : (
                      <span>이름 없음</span>
                    )}
                  </div>
                </Link>
              </li>
              <li>
                <div>
                  <button className="logout__btn" onClick={props.logout}>
                    로그아웃
                  </button>
                </div>
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
