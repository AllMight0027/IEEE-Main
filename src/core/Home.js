import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import Particles from "react-particles-js";
import "../App.css";
import Type from "../components/Type";
import { getAllUpcomingEvents } from "./helper/apicalls";
import { ReactComponent as LoadingIcon } from "../components/Double Ring-1s-200px.svg";
import { withRouter } from "react-router-dom";
const Home = ({ history }) => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    document.title = "Loading...";
    document.body.style.backgroundColor = "black";
    getAllUpcomingEvents().then((data) => {
      setUpcomingEvents(data);

      document.title = "IEEE-SRM";
    });
  }, []);

  return (
    <Base>
      <div className="container-fluid" style={{ height: "750px" }} id="type">
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
      <div className="container-fluid text-white">
        <div className="row" id="about">
          <div className="col-12 text-center">
            <h2>About Us</h2>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                src={require("./Asset 1.png")}
                alt=""
                style={{ maxWidth: "300px", marginTop: "-38px" }}
              />
            </div>
            <div className="col-md-5 mt-4 pr-md-4" id="about-text">
              <h6>
                <div className="row">
                  <div className="col-11 text-center">
                    <h6>
                      <b>
                        “There’s no power for change greater than a community
                        discovering what it cares about.”
                      </b>{" "}
                    </h6>
                  </div>
                </div>
                IEEE SRM is not just any student club rather a prolific student
                chapter and multitude of the scholarly that aims in advancing
                technology for Humanity reminds the technology community and the
                world that IEEE stands at the forefront of technological change
                for the betterment of humanity. No matter how advanced
                technology gets, there will always be a divide keeping us from
                truly knowing a few work-related domains. Here at IEEE, we
                bridge that gap with engaging activities across various such
                domains, where no work goes obscure. Every student, every
                passion and every interest matters to us and all are
                well-addressed and acknowledged. It is also a shared-platform
                for the exultant upbringing of new ideas or projects into
                furtherance.
              </h6>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2>Our Vision</h2>
          </div>
          <br />
          <div className="row">
            <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4 text-center">
              <h6>
                <b>“Innovate. Edify. Experience. Excel. ”</b> IEEE SRM is a
                prolific student chapter that aims to inspire professionalism
                and empower students, help them learn and implement new skills
                and technologies, gain exemplary knowledge through various
                engaging workshops and webinars, experience in fields of
                interest like application and website development, robotics and
                automation, consumer and power electronics, engineering, media,
                corporate and content writing, carry out research, publish
                papers, establish a professional profile and network with
                esteemed IEEE alumni across the globe, and develop projects that
                greatly benefit mankind.
              </h6>
            </div>
          </div>
        </div>
        <div className="row mt-5" id="upevents" style={{ minHeight: "190px" }}>
          <div className="col-12 text-center mt-5">
            <h2>Upcoming Events</h2>
          </div>
          <br />
          {upcomingEvents && upcomingEvents.length === 0 && (
            <div className=" col-12 mt-4 text-center">
              <LoadingIcon />
            </div>
          )}
          {upcomingEvents && upcomingEvents.error && (
            <div className=" col-12 mt-4 text-center">
              <h5>
                {" "}
                We Are Planning Something Great. Stick Around To Find Out Soon.
              </h5>
            </div>
          )}
          {upcomingEvents &&
            upcomingEvents.length !== 0 &&
            upcomingEvents.map((upcomingEvent, i) => {
              return (
                <div
                  className=" col-sm-12  col-md-4 mt-4 text-center"
                  style={{ backgroundColor: "black", cursor: "pointer" }}
                  onClick={() => history.push(`/event/${upcomingEvent._id}`)}
                >
                  <div class="card" style={{ backgroundColor: "black" }}>
                    <div class="row no-gutters">
                      <div class="col-auto">
                        <img
                          src={`https://ieee-srm-sb.herokuapp.com/api/upcomingevent/icon/${upcomingEvent._id}`}
                          class="img-fluid"
                          alt=""
                          style={{ height: "100px", borderRadius: "5px" }}
                        />
                      </div>
                      <div
                        class="col "
                        style={{
                          height: "100px",
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                          background: "rgb(30,30,30)",
                        }}
                      >
                        <div
                          class="card-block p-2"
                          style={{ textAlign: "center" }}
                        >
                          <p
                            class="card-title mt-1"
                            style={{
                              paddingLeft: "1px",
                              paddingRight: "0.3px",
                            }}
                          >
                            {upcomingEvent.name}
                          </p>
                          {upcomingEvent.from === upcomingEvent.to && (
                            <small
                              class="card-body"
                              style={{ marginTop: "-27px" }}
                            >
                              On: {upcomingEvent.from}
                            </small>
                          )}
                          {upcomingEvent.from !== upcomingEvent.to && (
                            <small
                              class="card-body"
                              style={{ marginTop: "-27px" }}
                            >
                              From: {upcomingEvent.from}&nbsp;&nbsp;To:{" "}
                              {upcomingEvent.to}
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4"></div>
        </div>
      </div>
    </Base>
  );
};

export default withRouter(Home);
