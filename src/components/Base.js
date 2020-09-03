import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useState } from "react";
import { getAllFolders } from "../core/helper/apicalls";
import Footer from "./Footer";

const Base = ({ className = "text-dark p-4", children, history }) => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      if (document.getElementById("name"))
        document.getElementById("name").style.top = "75%";
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

  const [folders, setFolders] = useState([]);

  useEffect(() => {
    getAllFolders().then((data) => {
      if (!data.error) setFolders(data);
    });
  }, []);

  window.onscroll = function () {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("goTop").style.display = "block";
    } else {
      document.getElementById("goTop").style.display = "none";
    }
  };

  return (
    <div>
      <img
        id="goTop"
        src="https://img.icons8.com/fluent/35/000000/up.png"
        style={{
          // position: "fixed",
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
                  className="pl-4 mt-2 text-white"
                  style={{ paddingTop: "18px", cursor: "pointer" }}
                  onClick={() => {
                    window.scrollTo(
                      0,
                      document.getElementById("about").getBoundingClientRect()
                        .top - 50
                    );
                  }}
                >
                  <img src="https://img.icons8.com/ios/28/ffffff/about.png" />
                  &nbsp;&nbsp;About Us
                </a>
              )}
              {history.location.pathname === "/" && (
                <a
                  className="pl-4 text-white mt-2"
                  style={{ paddingTop: "18px", cursor: "pointer" }}
                  onClick={() => {
                    window.scrollTo(
                      0,
                      document
                        .getElementById("upevents")
                        .getBoundingClientRect().top - 50
                    );
                  }}
                >
                  <img src="https://img.icons8.com/ios/28/ffffff/event-accepted-tentatively.png" />
                  &nbsp;&nbsp;Upcoming Events
                </a>
              )}

              <a
                href="/domains"
                className="pl-4 mt-2"
                style={{ paddingTop: "18px" }}
              >
                <img src="https://img.icons8.com/ios/28/ffffff/broadcasting.png" />
                &nbsp;&nbsp;Domains
              </a>

              <a
                href="/our-team"
                className="pl-4 mt-2"
                style={{ paddingTop: "18px" }}
              >
                <img src="https://img.icons8.com/ios/28/ffffff/conference.png" />
                &nbsp;&nbsp;Our Team
              </a>

              <div
                className="dropdown pl-2  mt-1"
                style={{ paddingTop: "6px" }}
              >
                <button className="dropbtn" onClick={myFunction2}>
                  <img src="https://img.icons8.com/ios/28/ffffff/today.png" />
                  &nbsp;&nbsp;Events&nbsp;&nbsp;
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content" id="myDropdown">
                  {folders &&
                    folders.length !== 0 &&
                    folders.map((folder, i) => {
                      return (
                        <a
                          key={`~${i}`}
                          href={`/previous-events/${folder.name}/${folder._id}`}
                          className="ml-3"
                          style={{ fontSize: "15px" }}
                        >
                          {folder.name}
                        </a>
                      );
                    })}
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
      <Footer></Footer>
    </div>
  );
};

export default withRouter(Base);
