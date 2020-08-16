import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./core/Home";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
