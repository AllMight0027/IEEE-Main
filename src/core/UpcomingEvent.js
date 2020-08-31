import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import { getUpcomingEvent } from "./helper/apicalls";
import { data } from "jquery";
import bg from "../components/Artboard1.png";

const UpcomingEvent = ({ match }) => {
  const [event, setEvent] = useState({});
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundColor = `black`;

    document.body.style.display = "none";

    getUpcomingEvent(match.params.eventId).then((data) => {
      if (!data.error) {
        setEvent(data);
        document.body.style.display = "";
      }
    });
  }, [match.params.eventId]);
  return (
    <Base>
      <div className="container text-white">
        <div className=" text-center mt-4 p-4">
          <h1 className="h1c font-weight-bold py-2">{event.name}</h1>
        </div>
        <div className="row mt-4">
          <div className="col-xl-6 col-lg-6 col-sm-12 text-center">
            <img
              src={`https://ieee-srm-sb.herokuapp.com/api/upcomingevent/poster/${event._id}`}
              alt=""
              className="poster"
              style={{
                borderRadius: "10px",
              }}
            />
            <br />
          </div>
          <div
            className="col-xl-6 col-lg-6  col-sm-12 text-justify my-auto h5"
            style={{ lineHeight: "2rem", borderLeft: "solid 5px #4D91B3" }}
          >
            {event.description}
          </div>
        </div>
        {event.registration && (
          <h6 className="mt-4">
            <a
              href={`${event.registrationLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg btn-block mx-auto"
              style={{
                width: "60%",
              }}
            >
              REGISTER HERE
            </a>
          </h6>
        )}
        {!event.registration && <h6 className="mt-4">REGISTERATION CLOSED</h6>}
      </div>
    </Base>
  );
};

export default UpcomingEvent;
