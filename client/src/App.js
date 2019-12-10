import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import { loadUser } from "./actions/authActions";
import { getUserCart } from "./actions/transactionActions";
import PrivateRoute from "./components/routing-components/private-route";
import PublicRoute from "./components/routing-components/public-route";
import Nav from "../src/components/nav/nav";
import AccountInfo from "./pages/account";
import AccountEdit from "./pages/account-edit";
import Orders from "./pages/orders";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Cart from "./pages/cart";
import Browse from "./pages/browse";
import ErrorC from "./pages/error";
import Item from "./pages/item";
import ViewItem from "./pages/view-item";
import SideMenu from "./components/nav/menu"
import "./App.css";
//
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
    if (localStorage.getItem("jwtToken")) {
      store.dispatch(getUserCart(jwt_decode(localStorage.getItem("jwtToken")).id));
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <SideMenu/>
          <div id="outer-container">
          <Nav />
          <div id="page-wrap">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute exact path="/login" component={Login} />
              <PublicRoute exact path="/signup" component={Signup} />
              <PrivateRoute exact path="/cart" component={Cart} />
              <Route exact path="/browse" component={Browse} />
              <Route exact path="/view-item" component={ViewItem} />
              <PrivateRoute exact path="/orders" component={Orders} />
              <Route exact path="/item" component={Item} />
              <PrivateRoute exact path="/account" component={AccountInfo} />
              <PrivateRoute exact path="/account-edit" component={AccountEdit} />
              <Route component={ErrorC} />
            </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}



export default App;
