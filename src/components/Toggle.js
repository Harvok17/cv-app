import React from "react";
import "../styles/Toggle.css";

const Toggle = (props) => {
  const { label, clickHandler } = props;

  return (
    <div className="toggle">
      <span className="toggle__title">{label}</span>
      <label className="switch">
        <input type="checkbox" onClick={clickHandler} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Toggle;
