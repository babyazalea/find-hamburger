import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useHttp } from "../../../hooks/http-hook";

import LoadingDots from "../../UI/LoadingDots/LoadingDots";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AuthController = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, error, initializeError, sendRequest } = useHttp();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onLogin = async (event) => {
    event.preventDefault();

    const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const getUserDataUrl = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const loginData = {
      email,
      password,
      returnSecureToken: true,
    };

    try {
      const responseData = await sendRequest(loginUrl, loginData);

      const token = { idToken: responseData["idToken"] };
      const userDataResponse = await sendRequest(getUserDataUrl, token);
      const userData = await userDataResponse.users[0];

      props.login(responseData, userData);
    } catch (err) {
      console.log(err);
    }
  };

  const confirmError = () => {
    initializeError();
  };

  return (
    <React.Fragment>
      <div className="auth-controller__wrapper">
        {isLoading ? (
          <LoadingDots />
        ) : (
          <React.Fragment>
            <form>
              <div className="auth__input-group">
                <input
                  type="email"
                  placeholder="이메일"
                  name="email"
                  onChange={(event) => onChange(event)}
                />
                <input
                  type="password"
                  placeholder="비밀번호"
                  name="password"
                  onChange={(event) => onChange(event)}
                />
                <button onClick={onLogin}>로그인</button>
              </div>
            </form>
            <div className="auth__control">
              <Link to="/auth/signup">
                <button>가입하러 가기</button>
              </Link>
              <Link to="/auth/reset-password">
                <button>비밀번호를 잃어버리셨나요?</button>
              </Link>
            </div>
          </React.Fragment>
        )}
      </div>
      <ErrorModal error={error} close={confirmError} />
    </React.Fragment>
  );
};

export default AuthController;
