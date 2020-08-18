import React from "react";
import { withRouter } from "react-router-dom";
import "../App.css";
import { ReactComponent as TeamIcon } from "./team.svg";
import { ReactComponent as EventIcon } from "./event.svg";

const Base = ({ className = "text-dark p-4", children, history }) => {
  return (
    <div className="mx-4">
      <nav className="navbar navbar-expand-md navbar-dark  w-100 ">
        <a className="navbar-brand" href="#">
          <img
            src={require("./black.png")}
            alt="LOGO"
            style={{ maxHeight: "100px", cursor: "pointer" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav font ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <TeamIcon className="icon" />
                Our Team
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                <EventIcon className="icon" />
                Events
              </a>
              <div className="dropdown-menu font">
                <ul>
                  <li>
                    <a className="dropdown-item" href="#">
                      2018
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      2019
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Base);
