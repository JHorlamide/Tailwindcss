import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import TestImage from "../assets/img/icon-close.svg";

const Modal = () => {
  const contentStyle = { background: "#000" };
  const overlayStyle = { background: "rgba(0,0,0,0.5)" };
  const arrowStyle = { color: "#000" };

  return (
    <div className="container p-10">
      <Popup trigger={<button>Click</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>

      <Popup
        trigger={
          <img
            src={TestImage}
            alt="predict-coin-logo"
            style={{ marginLeft: 10, width: 20, height: 20 }}
            // onClick={handleShowTooltip}
          />
        }
        position="right center"
      >
        <div>Popup content here !!</div>
      </Popup>

      <Popup
        trigger={<button className="button"> Open Modal </button>}
        {...{
          contentStyle,
          overlayStyle,
          arrowStyle,
        }}
      >
        <span> Modal content </span>
      </Popup>
    </div>
  );
};

export default Modal;
