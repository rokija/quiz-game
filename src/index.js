import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import dotenv from 'dotenv';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Results from './Components/Results/Results'

dotenv.config();

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/results" component={Results} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById("root"));
