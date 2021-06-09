import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useHttp } from "../../../../../hooks/http-hook";

import LoadingDots from "../../../../UI/LoadingDots/LoadingDots";
import ErrorModal from "../../../../UI/ErrorModal/ErrorModal";

import "./DeleteAccount.css";

const DeleteAccount = (props) => {
  const [enteredEmail, setEnteredEmail] = useState(null);
  const { isLoading, error, initializeError, sendRequest } = useHttp();

  const history = useHistory();

  const backToProfile = () => {
    history.goBack();
  };

  const handleEmail = (event) => {
    const {
      target: { value },
    } = event;

    setEnteredEmail(value);
  };

  const deleteAccount = async () => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const data = {
      idToken: props.idToken,
    };
    try {
      await sendRequest(url, data);
      props.logout();
    } catch (err) {}
  };

  const confirmError = () => {
    initializeError();
  };

  return (
    <React.Fragment>
      <div className="delete__account">
        {isLoading ? (
          <LoadingDots />
        ) : (
          <div className="delete-account__wrapper">
            <p>가입하실 때 사용한 이메일을 입력해주세요.</p>
            <input onChange={(event) => handleEmail(event)} />
            <div className="delete-account__controller">
              <button
                disabled={props.userEmail === enteredEmail ? false : true}
                onClick={deleteAccount}
              >
                계정 삭제
              </button>
              <button onClick={backToProfile}>되돌아가기</button>
            </div>
          </div>
        )}
      </div>
      <ErrorModal error={error} close={confirmError} />
    </React.Fragment>
  );
};

export default DeleteAccount;
