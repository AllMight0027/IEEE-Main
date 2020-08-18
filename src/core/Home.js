import React, { useEffect } from "react";
import Base from "../components/Base";
import Particles from "react-particles-js";
import "../App.css";
import Type from "../components/Type";
const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  return (
    <div className="black">
      <Base>
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
      </Base>
    </div>
  );
};

export default Home;
