import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "../App.css";

const Type = () => {
  return (
    <div className="text-center textEffect">
      <ReactTypingEffect
        className=""
        text={["IEEE. Innovate. Edify. Experience. Excel."]} //text=["Hello.", "World!"]
      />
    </div>
  );
};

export default Type;
