import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Plugin from './pages/Plugin';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Plugin} />
      </Switch>
    </BrowserRouter>
  );
}
