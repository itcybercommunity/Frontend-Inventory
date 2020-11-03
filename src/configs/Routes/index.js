import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Login, LoggedInPage , Register} from "../../pages";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/loggedin" component={LoggedInPage} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default Routes;
