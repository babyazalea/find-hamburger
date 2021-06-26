import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import BaseCard from "../BaseCard/BaseCard";

import "./ErrorModal.css";

const ErrorModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (props.error) {
      switch (props.error) {
        case "EMAIL_EXISTS":
          setErrorMessage("이미 가입된 이메일입니다.");
          break;
        case "OPERATION_NOT_ALLOWED":
          setErrorMessage(
            "로그인이 잠시 불가능합니다. 나중에 다시 시도해주세요."
          );
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          setErrorMessage(
            "비정상적인 활동으로 인해 모든 서버 요청이 차단되었습니다. 나중에 다시 시도해주세요."
          );
          break;
        case "EMAIL_NOT_FOUND":
          setErrorMessage("가입되지 않은 이메일입니다.");
          break;
        case "INVALID_PASSWORD":
          setErrorMessage("잘못된 비밀번호입니다.");
          break;
        case "USER_DISABLED":
          setErrorMessage("비활성화된 계정입니다.");
          break;
        case "INVALID_ID_TOKEN":
          setErrorMessage("로그인이 만료되었습니다. 다시 로그인 해주세요.");
          break;
        default:
          setErrorMessage("알 수 없는 에러가 발생했습니다.");
      }
      setIsOpen(true);
    }
  }, [props.error]);

  const app = document.getElementById("App");

  const closeModal = () => {
    setIsOpen(false);
    props.close();
  };

  let errorModal = null;
  if (isOpen) {
    errorModal = ReactDOM.createPortal(
      <div className="error__modal-wrapper">
        <div className="error__modal">
          <BaseCard>
            <h2>에러</h2>
            <span>{errorMessage}</span>
            <button onClick={closeModal}>닫기</button>
          </BaseCard>
        </div>
        <div className="error__modal-backdrop" onClick={closeModal}>
          <button className="error__modal-close-button" onClick={closeModal}>
            <span>
              <i className="fas fa-times" />
            </span>
          </button>
        </div>
      </div>,
      app
    );
  }

  return errorModal;
};

export default ErrorModal;
