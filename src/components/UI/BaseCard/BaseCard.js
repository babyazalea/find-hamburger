import React from "react";

import "./BaseCard.css";

const BaseCard = (props) => (
  <div
    className={
      props.customClassName ? `base-card ${props.customClassName}` : "base-card"
    }
    onClick={props.onClick ? props.onClick : null}
  >
    {props.children}
  </div>
);

export default BaseCard;
