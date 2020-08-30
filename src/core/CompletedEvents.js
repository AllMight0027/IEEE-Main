import React from "react";
import Base from "../components/Base";
import { useEffect } from "react";
import { getCompletedEvents } from "./helper/apicalls";
import { useState } from "react";

const CompletedEvents = ({ match }) => {
  document.title = "Loading...";
  document.body.style.display = "none";
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getCompletedEvents(match.params.folderId).then((data) => {
      if (!data.error) setEvents(data);
      document.title = `${match.params.folderName} Events`;
      document.body.style.background = "black";
      document.body.style.display = "";
    });
  }, []);

  return (
    <Base>
      <div className="container text-white">
        <div className=" text-center mt-4 p-4">
          <h1>{`${match.params.folderName}`}</h1>
        </div>
        {events &&
          events.length !== 0 &&
          events.map((event, i) => {
            return (
              <div
                className="row mt-5 border-left border-right border-bottom"
                style={{ borderRadius: "10px" }}
              >
                <h4
                  className="col-12 text-center py-2 border-bottom bg-light text-dark"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                >
                  {event.name}
                </h4>
                <div className="col-12 text-center py-3 border-bottom">
                  <img
                    src={`https://ieee-srm-sb.herokuapp.com/api/completedevent/photo/${event._id}`}
                    alt=""
                  />
                </div>
                <div className="col-12 p-3">
                  <h6>{event.description}</h6>
                </div>
              </div>
            );
          })}
      </div>
    </Base>
  );
};

export default CompletedEvents;
