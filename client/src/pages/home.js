import React, { Component } from "react";
import Homediscount from "../components/sliders/homediscount";
import HomeTiles from "../components/product-components/home-tiles";
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import { resetCheckout, getUserCart } from "../actions/transactionActions";
import LoadIcon from "../components/loader/loader"
import PropTypes from "prop-types";
import store from "../store";
import jwt_decode from "jwt-decode";

class Home extends Component {
    state = {
        message: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object,
        item: PropTypes.object,
        auth: PropTypes.object.isRequired,
        error: PropTypes.object.isRequired,
        resetCheckout: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        getOrders: PropTypes.func
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.resetCheckout();
        if (localStorage.getItem("jwtToken")) {
            store.dispatch(getUserCart(jwt_decode(localStorage.getItem("jwtToken")).id));
        }
    }
    render() {
        return (
            this.props.auth.isLoading ? <h1 className="page-title">Token found, loading user...<LoadIcon /></h1> :
                <>
                    <div className="banner">Banner</div>
                    <div className="home-user-container">
                        <p className="greeting" style={{ color: "white", fontSize: 40, marginLeft: 25 }}>Hello, {this.props.user ? this.props.user.name : null}</p>
                        <p className="cart-amount" style={{ color: "white", fontSize: 25, marginLeft: 25 }}>
                            You currently have {this.props.item.user_cart ? this.props.item.user_cart.length : null} item
                            {this.props.item.user_cart.length > 1 ? "s" : null} in your cart.</p>
                    </div>
                    <h1 className="slider-label">Featured</h1>
                    < Homediscount />
                    <HomeTiles />


                </>
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    auth: state.auth,
    item: state.item,
    error: state.error
})

export default connect(
    mapStateToProps,
    { resetCheckout, clearErrors }
)(Home);
