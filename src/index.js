import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import dotenv from 'dotenv';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Results from './Components/Results/Results'
import Login from "./components/Login/Login";

dotenv.config();

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/results" component={Results} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById("root"));
