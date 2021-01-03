import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Home/index";
import Setting from "../Setting/index";
import Result from "../Result";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/setting" component={Setting} />
      <Route path="/result" component={Result} />
    </Switch>
  );
};

export default Routes;
