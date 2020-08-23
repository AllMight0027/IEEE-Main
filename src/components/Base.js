import React from "react";
import { withRouter } from "react-router-dom";
import { ReactComponent as TeamIcon } from "./team.svg";
import { ReactComponent as EventIcon } from "./event.svg";

const Base = ({ className = "text-dark p-4", children, history }) => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      if (document.getElementById("name"))
        document.getElementById("name").style.top = "70%";
      console.log("open");
    } else {
      x.className = "topnav";
      if (document.getElementById("name"))
        document.getElementById("name").style.top = "50%";
      console.log("close");
    }
  }

  function myFunction2() {
    console.log(2);
    document.getElementById("myDropdown").classList.toggle("show");
  }

  return (
    <div>
      <img
        id="goTop"
        src="https://img.icons8.com/fluent/35/000000/up.png"
        style={{
          // position: "absolute",
          bottom: 15,
          right: 15,
          cursor: "pointer",
        }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "black" }}>
          <div className="col-12">
            <div className="topnav" id="myTopnav">
              <a style={{ marginLeft: "-20px" }}>
                <img
                  title="Home"
                  src={require("./black.png")}
                  alt="LOGO"
                  style={{ maxHeight: "75px", cursor: "pointer" }}
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
                    window.scrollTo(
                      0,
                      document.getElementById("about").getBoundingClientRect()
                        .top - 50
                    );
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
                    window.scrollTo(
                      0,
                      document
                        .getElementById("upevents")
                        .getBoundingClientRect().top - 50
                    );
                  }}
                >
                  <TeamIcon /> Upcoming Events
                </a>
              )}

              <a
                href="/our-team"
                className="pl-4"
                style={{ paddingTop: "28px" }}
              >
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
      <footer
        className="footer mt-5 pt-3"
        style={{ backgroundColor: "rgb(40,40,40)" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              {/* Intrested in being a Member Form; We will contact you */}
            </div>
            <div className="col-sm-3">{/* Quick Links */}</div>
            <div className="col-sm-3">{/* Contact Details*/}</div>
          </div>
          <small className="text-white">© Web And App Dev Team, IEEE-SRM</small>
        </div>
      </footer>
    </div>
  );
};

export default withRouter(Base);
