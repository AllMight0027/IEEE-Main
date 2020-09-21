import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-6 mt-4 text-center text-white">
            <div className="row">
              <div className="col-12">
                <h5 className="text-uppercase font-weight-bold mb-3">
                  CONTACT US
                </h5>
              </div>
              <div className="col-12">
                <p>
                  <img src="https://img.icons8.com/ios/28/ffffff/map-marker.png" />
                  &emsp; SRMIST - KTR, Tamil Nadu
                </p>
                <p>
                  <img src="https://img.icons8.com/ios/28/ffffff/composing-mail.png" />
                  &emsp;
                  <a href="mailto:ieee.srmktr@gmail.com" className="text-white">
                    ieee@srmist.edu.in&nbsp;&emsp;&emsp;&emsp;
                  </a>
                </p>
              </div>
              <div className="col-12 text-center text-white pb-3">
                {" "}
                <a
                  href="https://www.linkedin.com/company/ieeesrmist/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/ios/38/ffffff/linkedin.png"
                    className="mr-1"
                  />
                </a>
                <a
                  href="https://twitter.com/ieeesrmist"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/ios/38/ffffff/twitter-circled.png"
                    className="mr-1"
                  />
                </a>
                <a
                  href="https://www.instagram.com/ieeesrmist/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/ios/38/ffffff/instagram-new.png"
                    className="mr-1"
                  />
                </a>
                <a
                  href="https://www.medium.com/ieeesrmist/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/ios/40/ffffff/medium.png"
                    className="mr-1"
                  />
                </a>
                <a
                  href="https://github.com/IEEE-SRM-Student-Branch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/ios/38/ffffff/github.png"
                    className="mr-1"
                  />
                </a>
                <a
                  href="https://www.facebook.com/ieeesrmist"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://img.icons8.com/ios/38/ffffff/facebook.png" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-4 text-center">
            <div className="col-12 text-center text-white">
              <h5 className="text-uppercase font-weight-bold mb-3">
                WANT US TO CONTACT YOU?
              </h5>
            </div>
            <form
              className="form"
              style={{ display: "inline-block", width: "295px" }}
            >
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleMessage"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group text-xs-right">
                <button
                  type="button"
                  className="btn btn-outline-light btn-block"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-white text-center py-3">
        Made with <span class="heart">❤️️</span> by IEEE SRM SB
        <br />
        <a
          href="/codeofconduct"
          className="text-muted"
          target="_blank"
          rel="noopener noreferrer"
        >
          <small> Code of Conduct </small>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
