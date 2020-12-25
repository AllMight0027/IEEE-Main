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
  }, [match.params.folderId, match.params.folderName]);

  return (
    <Base>
      <div className="container">
        <div className=" text-center mt-4 p-4">
          <h1 className="font-weight-bold text-white">{`${match.params.folderName}`}</h1>
        </div>
        {events &&
          events.length !== 0 &&
          events.map((event, i) => {
            return (
              <div className="card neon_card">
                <img
                  className="card-img-top"
                  src={`https://ieee-srmist.herokuapp.com/api/completedevent/photo/${event._id}`}
                  alt=""
                />
                <div className="card-body">
                  <h3 className="card-title font-weight-bold text-center ludwig px-2">
                    {event.name}
                  </h3>
                  <p className="card-text text-black text-left px-2">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </Base>
  );
};

export default CompletedEvents;
