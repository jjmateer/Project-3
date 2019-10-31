import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Cart from "./pages/cart";
import Browse from "./pages/browse";
import ErrorC from "./pages/error";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/browse" component={Browse} />
            <Route component={ErrorC} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
