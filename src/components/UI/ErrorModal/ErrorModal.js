import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import BaseCard from "../BaseCard/BaseCard";

import "./ErrorModal.css";

const ErrorModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props.error) {
      setIsOpen(true);
    }
  }, [props.error]);

  const app = document.getElementById("App");

  // EMAIL_EXISTS : 이메일 주소는 이미 다른 계정에서 사용 중입니다.
  // OPERATION_NOT_ALLOWED :이 프로젝트에 비밀번호 로그인이 사용 중지되었습니다.
  // TOO_MANY_ATTEMPTS_TRY_LATER : 비정상적인 활동으로 인해이 기기의 모든 요청을 차단했습니다. 나중에 다시 시도하십시오.
  // EMAIL_NOT_FOUND :이 식별자에 해당하는 사용자 레코드가 없습니다. 사용자가 삭제되었을 수 있습니다.
  // INVALID_PASSWORD : 비밀번호가 유효하지 않거나 사용자에게 비밀번호가 없습니다.
  // USER_DISABLED : 관리자가 사용자 계정을 비활성화했습니다.
  // OPERATION_NOT_ALLOWED : 해당 제공자가이 프로젝트에 대해 사용 중지되었습니다.
  // INVALID_IDP_RESPONSE : 제공된 인증 자격 증명이 잘못되었거나 만료되었습니다.
  // EMAIL_NOT_FOUND :이 식별자에 해당하는 사용자 레코드가 없습니다. 사용자가 삭제되었을 수 있습니다.
  // INVALID_ID_TOKEN : 사용자의 자격 증명이 더 이상 유효하지 않습니다. 사용자는 다시 로그인해야합니다.
  // INVALID_ID_TOKEN : 사용자의 자격 증명이 더 이상 유효하지 않습니다. 사용자는 다시 로그인해야합니다.
  // USER_NOT_FOUND :이 식별자에 해당하는 사용자 레코드가 없습니다. 사용자가 삭제되었을 수 있습니다.
  // INVALID_ID_TOKEN : 사용자의 자격 증명이 더 이상 유효하지 않습니다. 사용자는 다시 로그인해야합니다.
  // USER_NOT_FOUND :이 식별자에 해당하는 사용자 레코드가 없습니다. 사용자가 삭제되었을 수 있습니다.
  // INVALID_ID_TOKEN:The user's credential is no longer valid. The user must sign in again.
  // USER_NOT_FOUND: There is no user record corresponding to this identifier. The user may have been deleted.

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
            <h2>Error Title</h2>
            <span>{props.error}</span>
            <button onClick={closeModal}>닫기</button>
          </BaseCard>
        </div>
        <div className="error__modal-backdrop" onClick={closeModal}>
          <button className="error__modal-close-button" onClick={closeModal}>
            <span>❌</span>
          </button>
        </div>
      </div>,
      app
    );
  }

  return errorModal;
};

export default ErrorModal;
