import React from "react";
import Base from "../components/Base";
import Particles from "react-particles-js";
import "../App.css";
import Type from "../components/Type";
const Home = () => {
  return (
    <div className="black">
      <Base></Base>
      <Type />
      <Particles
        params={{
          polygon: {
            number: {
              value: 10,
              density: {
                // enable: true,
                value_area: 10,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Home;
