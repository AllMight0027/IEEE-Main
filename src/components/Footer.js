import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 my-3 d-none d-lg-block">
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Upcoming Events</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 contact my-3">
            <h5 className="text-uppercase font-weight-bold mb-3">CONTACT</h5>

            <p>
              <i className="fas fa-map mr-3"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@example.com
            </p>
            <p>
              <i className="fas fa-instagram mr-3"></i> info@example.com
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 my-3">
            <form className="form">
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
        Made with <span class="heart">❤</span> by IEEE SRM SB
      </div>
    </footer>
  );
}

export default Footer;
