import React, { useState } from "react";
import "../App.css";

function ConfirmButton(props) {
  const handleClick = (e) => {
    props.handleButtonClick();
  };

  return (
    <div className={"buttonContainer"}>
      <button className={"confirm"} onClick={handleClick}>
        {props.text}
      </button>
    </div>
  );
}

export default ConfirmButton;
