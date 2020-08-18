import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OurTeam from "./core/OurTeam";
import Home from "./core/Home";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/our-team" component={OurTeam} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
