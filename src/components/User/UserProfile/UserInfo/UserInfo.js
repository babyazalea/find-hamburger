import React, { useContext } from "react";

import { AuthContext } from "../../../../context/auth-context";

import "./UserInfo.css";

const UserInfo = (props) => {
  const authContext = useContext(AuthContext);

  return (
    <React.Fragment>
      {authContext.isLoggedIn &&
      props.userEmail !== null &&
      props.userName !== null ? (
        <div className="user__info">
          <div className="user__image">
            <i className="fas fa-user-circle"></i>
          </div>
          <div>
            <span className="user__email">{props.userEmail}</span>
          </div>
          <div>
            {props.nameEditing ? (
              <input
                type="text"
                placeholder="이름"
                value={props.userName}
                name="name"
                onChange={props.userNameHandle}
              />
            ) : (
              <span className="user__name">{props.userName}</span>
            )}
          </div>
        </div>
      ) : (
        <div className="error-message-box">
          <p>프로필을 불러오지 못했습니다.</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default UserInfo;
