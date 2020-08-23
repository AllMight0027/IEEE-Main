import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import { getUpcomingEvent } from "./helper/apicalls";
import { data } from "jquery";

const UpcomingEvent = ({ match }) => {
  const [event, setEvent] = useState({});
  useEffect(() => {
    document.body.style.backgroundColor = "black";
    document.body.style.display = "none";

    getUpcomingEvent(match.params.eventId).then((data) => {
      if (!data.error) {
        setEvent(data);
        document.body.style.display = "";
      }
    });
  }, []);
  return (
    <Base>
      <div className="container text-white">
        <div className=" text-center mt-4 p-4">
          <h3>{event.name}</h3>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <img
              src={`https://ieee-srm-sb.herokuapp.com/api/upcomingevent/poster/${event._id}`}
              alt=""
              className="poster"
            />
            <br />

            {event.registration && (
              <h6 className="mt-3">
                <a
                  href={`${event.registrationLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  REGISTER HERE
                </a>
              </h6>
            )}
            {!event.registration && (
              <h6 className="mt-3">REGISTERATION CLOSED</h6>
            )}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">{event.description}</div>
        </div>
      </div>
    </Base>
  );
};

export default UpcomingEvent;
