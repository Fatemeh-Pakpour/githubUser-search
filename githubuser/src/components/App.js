import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// App components
import About from "./About";
import Home from "./Home";
import "../App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}
export default App;
