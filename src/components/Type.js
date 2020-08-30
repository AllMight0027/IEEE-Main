import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "../App.css";

const Type = () => {
  return (
    <div className=" container-fluid text-center ludwig1" id="name">
      <ReactTypingEffect
        text={["IEEE. Innovate. Edify. Experience. Excel."]} //text=["Hello.", "World!"]
      />
    </div>
  );
};

export default Type;
