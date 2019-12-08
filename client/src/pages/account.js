import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { resetCheckout, getUserCart } from "../actions/transactionActions";
import { clearErrors } from "../actions/errorActions";
import { loadUser } from "../actions/authActions";
// import LoadIcon from "../components/loader/loader";
import PropTypes from "prop-types";
import "../components/product-components/view-item.css"
import store from "../store";
import jwt_decode from "jwt-decode";
import "../components/auth-components/account.css";

class AccountInfo extends Component {
    static propTypes = {
        user: PropTypes.object,
        isAuthenticated: PropTypes.bool,
        resetCheckout: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        loadUser: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.resetCheckout();
        if (localStorage.getItem("jwtToken")) {
            store.dispatch(getUserCart(jwt_decode(localStorage.getItem("jwtToken")).id));
        }
    }
    render() {
        const { goBack } = this.props.history;
        return (
            <>
                <div className="account-link-grid">
                    <Link to="/orders" className="order-grid-items" id="account-orders">Orders</Link>
                    <Link to="/" className="order-grid-items" id="account-edit">Edit account info</Link>
                    <Link to="/" className="order-grid-items" id="account-payment">Payment options</Link>
                </div>
                {/* <div className="account-info-container">
                    <div className="user-id">User ID: {this.props.user._id}</div>
                    <div className="user-name">Name: {this.props.user.name}</div>
                    <div className="user-email">Email: {this.props.user.email}</div>
                </div> */}
            </>
        )
    }
}
const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    user: state.auth.user,
    error: state.error,
})

export default connect(
    mapStateToProps,
    { clearErrors, resetCheckout, loadUser }
)(AccountInfo);
