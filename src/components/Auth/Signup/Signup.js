import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useHttp } from "../../../hooks/http-hook";

import LoadingDots from "../../UI/LoadingDots/LoadingDots";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPassowordError] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isLoading, error, initializeError, sendRequest } = useHttp();

  const history = useHistory();

  useEffect(() => {
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      setPassowordError(false);
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
        const response = await sendRequest(url, signupData);
        console.log(response);
        if (response.status === 200) {
          history.push("/");
        }
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
          <form>
            <div className="signup__input-group">
              <input
                type="email"
                placeholder="이메일"
                name="email"
                onChange={(e) => onChange(e)}
              />
              <input
                type="password"
                placeholder="비밀번호"
                name="password"
                onChange={(e) => onChange(e)}
              />
              <input
                type="password"
                placeholder="비밀번호 확인"
                name="confirm-password"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="auth__submit-controll">
              <button onClick={onSignup} disabled={passwordError}>
                가입
              </button>
            </div>
          </form>
        )}
      </div>
      <ErrorModal error={error} close={confirmError} />
    </React.Fragment>
  );
};

export default Signup;
