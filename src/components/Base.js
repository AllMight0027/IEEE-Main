import React from "react";
import { withRouter } from "react-router-dom";
import { ReactComponent as TeamIcon } from "./team.svg";
import { ReactComponent as EventIcon } from "./event.svg";

const Base = ({ className = "text-dark p-4", children, history }) => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function myFunction2() {
    console.log(2);
    document.getElementById("myDropdown").classList.toggle("show");
  }

  return (
    <div className="container-fluid">
      <div className="row" style={{ backgroundColor: "black" }}>
        <div className="col-12">
          <div className="topnav" id="myTopnav">
            <a style={{ marginLeft: "-20px" }}>
              <img
                title="Home"
                src={require("./black.png")}
                alt="LOGO"
                style={{ maxHeight: "80px", cursor: "pointer" }}
                onClick={() => {
                  history.push("/");
                }}
              />
            </a>
            {history.location.pathname === "/" && (
              <a
                className="pl-4 text-white"
                style={{ paddingTop: "28px", cursor: "pointer" }}
                onClick={() => {
                  window.scrollBy(0, 850);
                }}
              >
                <TeamIcon /> About Us
              </a>
            )}
            {history.location.pathname === "/" && (
              <a
                className="pl-4 text-white"
                style={{ paddingTop: "28px", cursor: "pointer" }}
                onClick={() => {
                  window.scrollBy(0, 800);
                }}
              >
                <TeamIcon /> Upcoming Events
              </a>
            )}

            <a href="/our-team" className="pl-4" style={{ paddingTop: "28px" }}>
              <TeamIcon /> Our Team
            </a>

            <div className="dropdown pl-2" style={{ paddingTop: "16px" }}>
              <button className="dropbtn" onClick={myFunction2}>
                <EventIcon />
                &nbsp;&nbsp;Events <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content" id="myDropdown">
                <a href="" className="ml-3" style={{ fontSize: "15px" }}>
                  2019
                </a>
              </div>
            </div>
            <a
              style={{ fontSize: "20px", color: "white" }}
              className="icon pt-4"
              onClick={() => {
                myFunction();
              }}
            >
              &#9776;
            </a>
          </div>
        </div>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

export default withRouter(Base);
