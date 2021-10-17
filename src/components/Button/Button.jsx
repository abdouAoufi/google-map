import React from "react";
import "./index.css";
import light from "../../assets/light.svg";

export default function Button({ text }) {
  return (
    <button className="button">
      <img className="location" alt="light" src={light} height="25px" />
      {text}
    </button>
  );
}
