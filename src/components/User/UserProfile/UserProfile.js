import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";

import { AuthContext } from "../../../context/auth-context";
import { useHttp } from "../../../hooks/http-hook";

import LoadingDots from "../../UI/LoadingDots/LoadingDots";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

import { icons } from "../../../assets/icons/icons";

const UserProfile = (props) => {
  const [idToken, setIdToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [nameEditing, setNameEditing] = useState(false);
  const [sendedVerification, setSendedVerification] = useState(false);

  const authContext = useContext(AuthContext);

  const { isLoading, error, initializeError, sendRequest } = useHttp();

  const { userId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    setIdToken(props.idToken);
    setUserEmail(props.userEmail);
    setUserName(props.userName !== "" ? props.userName : "이름 없음");
    setPhotoUrl(props.photoUrl || null);
  }, [props.idToken, props.userName, props.userEmail, props.photoUrl]);

  const toggleEditMode = () => {
    setNameEditing(!nameEditing);
  };

  const userNameHandle = (event) => {
    const {
      target: { value },
    } = event;

    setUserName(value);
  };

  const emailVerification = async () => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const verifingData = {
      requestType: "VERIFY_EMAIL",
      idToken: idToken,
    };

    try {
      await sendRequest(url, verifingData);
      setSendedVerification(true);
    } catch (err) {
      console.log(err);
    }
  };

  const changeName = async () => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const dataForUpdate = {
      idToken: idToken,
      displayName: userName,
      photoUrl: "",
      deleteAttribute: ["PHOTO_URL"],
      returnSecureToken: true,
    };

    try {
      const responseData = await sendRequest(url, dataForUpdate);
      props.updateProfile(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  const confirmError = () => {
    initializeError();
  };

  let profile;
  if (authContext.isLoggedIn && userEmail !== null && userName !== null) {
    profile = (
      <div className="user__profile">
        <div className="user__image">
          {photoUrl !== null ? (
            <img src={photoUrl} alt="profile" />
          ) : (
            icons("user-circle")
          )}
        </div>
        <p className="user__email">{userEmail}</p>
        {nameEditing ? (
          <input
            type="text"
            placeholder="이름"
            value={userName}
            name="name"
            onChange={userNameHandle}
          />
        ) : (
          <p className="user__name">{userName}</p>
        )}
      </div>
    );
  } else {
    profile = (
      <div className="error-message-box">
        <p>프로필을 불러오지 못했습니다.</p>
      </div>
    );
  }

  let verficaion;
  verficaion = authContext.isVerified ? null : (
    <div className="user__email__verification">
      {sendedVerification ? (
        <p>
          인증 메일을 {userEmail}로 보냈습니다. 이메일을 확인하시고 다시 로그인
          해주세요.
        </p>
      ) : (
        <button onClick={emailVerification}>이메일 인증 하기</button>
      )}
    </div>
  );

  let nameEditButton;
  nameEditButton = authContext.isVerified ? (
    <div className="user-name__edit-btn">
      {nameEditing ? (
        <React.Fragment>
          <button onClick={toggleEditMode}>수정 취소</button>
          <button onClick={changeName}>이대로 수정</button>
        </React.Fragment>
      ) : (
        <button onClick={toggleEditMode}>닉네임 수정</button>
      )}
    </div>
  ) : null;

  return (
    <React.Fragment>
      <div className="profile-container">
        {isLoading || userEmail === null || userName === null ? (
          <LoadingDots />
        ) : (
          <React.Fragment>
            {profile}
            <React.Fragment>
              {verficaion}
              {nameEditButton}
              {authContext.isVerified ? (
                <div className="user-password__change-btn">
                  <Link to={`/users/${userId}/reset-password`}>
                    <button>비밀번호 변경</button>
                  </Link>
                </div>
              ) : null}
            </React.Fragment>
          </React.Fragment>
        )}
        <Link to={`${url}/user-burgers`}>만든 버거 보기</Link>
      </div>
      <ErrorModal error={error} close={confirmError} />
    </React.Fragment>
  );
};

export default UserProfile;
