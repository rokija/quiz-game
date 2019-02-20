import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
  constructor() {
    super();

    
    this.token = true;
  }
  render() {
    const { path, component } = this.props;
    return this.token ? (
      <Route exact path={path} component={component} />
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default ProtectedRoute;