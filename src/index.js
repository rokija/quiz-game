import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import ManageUserContainer from "./containers/ManageUserContainer";
import Login from "./components/Login/Login";

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={ManageUserContainer} />
            <ProtectedRoute path="/*" component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
