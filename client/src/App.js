import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/private-route";
import PublicRoute from "./components/public-route/public-route";
import Nav from "../src/components/nav/nav";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Cart from "./pages/cart";
import Browse from "./pages/browse";
import browseByCategory from "./pages/browse-search";
import ErrorC from "./pages/error";
import Item from "./pages/item";
import "./App.css";
//
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute exact path="/login" component={Login} />
              <PublicRoute exact path="/signup" component={Signup} />
              <PrivateRoute exact path="/cart" component={Cart} />
              <Route exact path="/browse" component={Browse} />
              <Route exact path="/browse-by-category" component={browseByCategory} />
              <Route exact path="/item" component={Item} />
              <Route component={ErrorC} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}



export default App;
