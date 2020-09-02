import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "../App.css";

const Type = () => {
  return (
    <div className=" container-fluid text-center ludwig1" id="name">
      <ReactTypingEffect cursor="" cursorClassName="d-none" staticText="IEEE" />
      <br />
      <ReactTypingEffect
        text={[`Innovate. Edify. Experience. Excel.`]}
      ></ReactTypingEffect>
    </div>
  );
};

export default Type;
