import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OurTeam from "./core/OurTeam";
import Home from "./core/Home";
import UpcomingEvent from "./core/UpcomingEvent";
import CompletedEvents from "./core/CompletedEvents";
import OurDomains from "./core/OurDomains";
import CoC from "./core/CoC";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/our-team" component={OurTeam} />
          <Route exact path="/domains" component={OurDomains} />
          <Route exact path="/codeofconduct" component={CoC} />
          <Route exact path="/event/:eventId" component={UpcomingEvent} />
          <Route
            exact
            path="/previous-events/:folderName/:folderId"
            component={CompletedEvents}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
