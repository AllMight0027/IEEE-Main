import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OurTeam from "./core/OurTeam";
import Home from "./core/Home";
import UpcomingEvent from "./core/UpcomingEvent";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/our-team" component={OurTeam} />
          <Route exact path="/event/:eventId" component={UpcomingEvent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
