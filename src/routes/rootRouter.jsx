import React from "react";
import App from "../App";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export default class RootRouter extends React.Component {
  componentDidMount() {
    console.log("loading router.");
  }
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact strict from="/" to="/app" />
          <Route path="/app" component={App} />
          <Route Component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

class NotFound extends React.Component {
  render() {
    return <div>404 Found</div>;
  }
}
