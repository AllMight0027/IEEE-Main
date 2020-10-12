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
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ zIndex: 1000, backgroundColor: "black" }}
      >
        <div className="d-flex flex-grow-1">
          <span className="w-100 d-lg-none d-block">
            {/*<!-- hidden spacer to center brand on mobile -->*/}
          </span>
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
          <div className="w-100 text-right">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#topbar"
              style={{
                top: "50%",
                transform: "translateY(45%)",
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div
          class="collapse navbar-collapse flex-grow-1 text-right"
          id="topbar"
        >
          <ul class="navbar-nav ml-auto flex-nowrap text-left">
            <li class="nav-item">
              <a
                  className="text-white nav-link"
                  style={{ paddingTop: "18px", cursor: "pointer" }}
                  href='/#about'
                >
                  <img src="https://img.icons8.com/ios/150/ffffff/about.png" style={{height:'28px'}} />
                  &nbsp;&nbsp;About Us
                </a>
              
            </li>
            <li class="nav-item">
               <a
                  className="text-white nav-link"
                  style={{ paddingTop: "18px", cursor: "pointer" }}
                 href='/#upcoming-events'
                >
                  <img src="https://img.icons8.com/ios/150/ffffff/event-accepted-tentatively.png" style={{height:'28px'}} />
                  &nbsp;&nbsp;Upcoming Events
                </a>
            </li>
            <li class="nav-item">
              <a
                href="/domains"
                className="text-white nav-link"
                style={{ paddingTop: "18px" }}
              >
                <img src="https://img.icons8.com/ios/150/ffffff/broadcasting.png" style={{height:'28px'}} />
                &nbsp;&nbsp;Domains
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/our-team"
                className="text-white nav-link"
                style={{ paddingTop: "18px" }}
              >
                <img src="https://img.icons8.com/ios/150/ffffff/conference.png" style={{height:'28px'}} />
                &nbsp;&nbsp;Our Team
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://concepto.ieeesrmist.in/"
                className="text-white nav-link"
                style={{ paddingTop: "18px" }}
              >
                <img
                  src={require("./concepto.png")}
                  style={{
                    maxHeight: "100px",
                    marginTop: "-38px",
                    marginLeft: "-18px",
                    marginRight: "-18px",
                    marginBottom: "-38px",
                  }}
                />
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ paddingTop: "18px" }}
              >
                <img src="https://img.icons8.com/ios/150/ffffff/today.png" style={{height:'28px'}} />
                &nbsp;&nbsp;Events&nbsp;&nbsp;
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {folders &&
                  folders.length !== 0 &&
                  folders.map((folder, i) => {
                    return (
                      <a
                        key={`~${i}`}
                        href={`/previous-events/${folder.name}/${folder._id}`}
                        className="dropdown-item"
                      >
                        {folder.name}
                      </a>
                    );
                  })}
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <div className={className}>{children}</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default withRouter(Base);
