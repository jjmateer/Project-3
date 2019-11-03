import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Cart from "./pages/cart";
import Browse from "./pages/browse";
import ErrorC from "./pages/error";
import Logout from "./components/logout";
import "./App.css";
import Footer from "./components/footer/footer";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Logout />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/browse" component={Browse} />
              <Route component={ErrorC} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
