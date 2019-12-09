import React, { Component } from "react";
import Homediscount from "../components/sliders/homediscount";
import HomeTiles from "../components/product-components/home-tiles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import { resetCheckout, getUserCart } from "../actions/transactionActions";
import { logout } from "../actions/authActions";
import LoadIcon from "../components/loader/loader"
import PropTypes from "prop-types";
import store from "../store";
import "../components/home-components/home.css";
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
        getOrders: PropTypes.func,
        logout: PropTypes.func
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.resetCheckout();
        if (localStorage.getItem("jwtToken")) {
            store.dispatch(getUserCart(jwt_decode(localStorage.getItem("jwtToken")).id));
        }
    }
    render() {
        const { items } = this.props.item;
        const discountitems = items.filter((item) => {
            return item.price < 100;
        })
        return (
            this.props.auth.isLoading ? <h1 className="page-title"><LoadIcon /></h1> :
                <>
                    {/* <div className="banner">Banner</div> */}
                    <div className="home-user-container">
                        <p className="greeting" style={{ color: "white", fontSize: 40, marginLeft: 25 }}>Hello, {this.props.user ? this.props.user.name : null}</p>
                        <p className="cart-amount" style={{ color: "white", fontSize: 25, marginLeft: 25 }}>
                            You currently have {this.props.item.user_cart ? this.props.item.user_cart.length : null} item
                            {this.props.item.user_cart.length > 1 ? "s" : null} in your cart.</p>
                        <div className="home-account-div">
                            <Link id="home-account-orders" to="/orders">Orders</Link>
                            <Link id="home-account-cart" to="/cart">Cart</Link>
                            <Link id="home-account-search" to="/browse">Search</Link>
                            <Link id="home-account-computers" onClick={this.props.logout} to="/">Logout</Link>
                        </div>
                    </div>
                    <h1 className="slider-label">Featured</h1>
                    < Homediscount />
                    <h1 className="slider-label">Best deals</h1>
                    <div className="masonry-wrapper">
                        <div className="masonry">
                            {discountitems.map(({ _id, image, item, brand, price }) => {
                                return (
                                    this.props.item.loading ? <h1 key={_id} className="page-title"><LoadIcon /></h1> :
                                        <HomeTiles
                                            key={_id}
                                            id={_id}
                                            image={image}
                                            item={item}
                                            brand={brand}
                                            price={price}

                                        />
                                )
                            })}
                        </div>
                    </div>
                    )
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
    { resetCheckout, clearErrors, logout }
)(Home);
