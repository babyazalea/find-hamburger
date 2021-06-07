import React, { useContext } from "react";

import { AuthContext } from "../../../../context/auth-context";

import { icons } from "../../../../assets/icons/icons";

const UserInfo = (props) => {
  const authContext = useContext(AuthContext);

  return (
    <React.Fragment>
      {authContext.isLoggedIn &&
      props.userEmail !== null &&
      props.userName !== null ? (
        <div className="user__info">
          <div className="user__image">
            {props.photoUrl !== null ? (
              <img src={props.photoUrl} alt="profile" />
            ) : (
              icons("user-circle")
            )}
          </div>
          <p className="user__email">{props.userEmail}</p>
          {props.nameEditing ? (
            <input
              type="text"
              placeholder="이름"
              value={props.userName}
              name="name"
              onChange={props.userNameHandle}
            />
          ) : (
            <p className="user__name">{props.userName}</p>
          )}
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
