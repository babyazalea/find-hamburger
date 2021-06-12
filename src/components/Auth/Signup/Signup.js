import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useHttp } from "../../../hooks/http-hook";

import LoadingDots from "../../UI/LoadingDots/LoadingDots";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPassowordError] = useState(true);
  const [signed, setSigned] = useState(false);

  const { isLoading, error, initializeError, sendRequest } = useHttp();

  useEffect(() => {
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      setPassowordError(false);
    } else {
      setPassowordError(true);
    }
  }, [password, confirmPassword]);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirm-password") {
      setConfirmPassword(value);
    }
  };

  const onSignup = async (event) => {
    event.preventDefault();

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const signupData = {
      email,
      password,
      returnSecureToken: true,
    };

    if (password === confirmPassword) {
      try {
        await sendRequest(url, signupData);

        setSigned(true);
      } catch (err) {
        console.log(err);
      }
    } else {
    }
  };

  const confirmError = () => {
    initializeError();
  };

  return (
    <React.Fragment>
      <div className="signup">
        {isLoading ? (
          <LoadingDots />
        ) : (
          <React.Fragment>
            {signed ? (
              <div className="signup__finished">
                <p>가입이 완료되었습니다.</p>
                <Link to="/auth">
                  <button>로그인하러 가기</button>
                </Link>
              </div>
            ) : (
              <form>
                <div className="signup__input-group">
                  <label>이메일</label>
                  <input
                    type="email"
                    placeholder="이메일"
                    name="email"
                    onChange={(e) => onChange(e)}
                  />
                  <label>비밀번호</label>
                  <input
                    type="password"
                    placeholder="비밀번호"
                    name="password"
                    onChange={(e) => onChange(e)}
                  />
                  <label>비밀번호 확인</label>
                  <input
                    type="password"
                    placeholder="비밀번호 확인"
                    name="confirm-password"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="signup__submit-controll">
                  <button
                    className="signup__button"
                    onClick={(e) => onSignup(e)}
                    disabled={passwordError}
                  >
                    가입
                  </button>
                </div>
              </form>
            )}
          </React.Fragment>
        )}
      </div>
      <ErrorModal error={error} close={confirmError} />
    </React.Fragment>
  );
};

export default Signup;
