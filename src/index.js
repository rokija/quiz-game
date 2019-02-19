import React, {Component} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./components/Questions/Question"
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

class Root extends Component {
    render() {
      return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/question" component={Question} />
            </Switch>
          </BrowserRouter>
  
      );
    }
  }

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
