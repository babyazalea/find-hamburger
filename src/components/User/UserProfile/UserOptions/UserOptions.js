import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { AuthContext } from "../../../../context/auth-context";

import "./UserOptions.css";

const UserOptions = (props) => {
  const { userId } = useParams();

  const authContext = useContext(AuthContext);

  let verficaion;
  verficaion = authContext.isVerified ? null : (
    <div className="user__email__verification">
      {props.sendedVerification ? (
        <p>
          인증 메일을 {props.userEmail}로 보냈습니다. 이메일을 확인하시고 다시
          로그인 해주세요.
        </p>
      ) : (
        <button onClick={props.emailVerification}>이메일 인증 하기</button>
      )}
    </div>
  );

  let nameEditButton;
  nameEditButton = authContext.isVerified ? (
    <div className="user-name__edit-btn">
      {props.nameEditing ? (
        <React.Fragment>
          <button onClick={props.toggleEditMode}>수정 취소</button>
          <button onClick={props.changeName}>이대로 수정</button>
        </React.Fragment>
      ) : (
        <button onClick={props.toggleEditMode}>닉네임 수정</button>
      )}
    </div>
  ) : null;

  return (
    <div className="user__options">
      {verficaion}
      {nameEditButton}
      <div>
        <Link to={`/users/${userId}/reset-password`}>
          <button>비밀번호 변경</button>
        </Link>
      </div>
      <div>
        <Link to={`/users/${userId}/delete-account`}>
          <button className="delete-account__button">계정 삭제</button>
        </Link>
      </div>
    </div>
  );
};

export default UserOptions;
