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
