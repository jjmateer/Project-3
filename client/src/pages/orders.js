import React, { Component } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import { getOrders } from "../actions/authActions";
import {resetCheckout} from "../actions/transactionActions";
import LoadIcon from "../components/loader/loader"
import PropTypes from "prop-types";
import "../components/product-components/orders.css"


class Orders extends Component {
    state = {
        msg: null
    };
    static propTypes = {
        user: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        clearErrors: PropTypes.func.isRequired,
        orders: PropTypes.array.isRequired,
        resetCheckout: PropTypes.func.isRequired,
        getOrders: PropTypes.func
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.getOrders(this.props.user._id)
        this.props.resetCheckout();
    }
    render() {
        const { orders } = this.props.auth;
        console.log(orders)
        return (
            <div>
                {orders.length ? <h1 className="page-title">Orders</h1> :
                    <h1 className="page-title">{this.props.user.isLoading ? "Loading..." : null}</h1>}
                <h1 className="page-title">{orders.length < 1 && !this.props.user.isLoading ? "No orders found." : null}</h1>
                <div>
                    {orders.map(({ _id, items, total }) => (
                        <ul className="order-list" key={_id}>
                            <li className="order-item">
                                <p id="total-order-price">Order ID: {_id}</p>
                                <p id="total-order-price">Order total: ${total}.00</p>
                                {items.map(({ _id, item, quantity, price, image, brand }) => (
                                    <div className="order-info" key={_id}>
                                        <img alt={image} className="order-item-img" src={image}></img>
                                        <div className="order-item-info">
                                            <p>{item}</p>
                                            <p>By {brand}</p>
                                            <p>Quantity: {quantity}</p>
                                            <p>Price per unit: ${price}.00</p>
                                        </div>
                                        <p>{quantity} X ${price}.00 = ${quantity * price}.00</p>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    ))}
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    user: state.auth.user,
    orders: state.auth.orders,
    error: state.error,
})

export default connect(
    mapStateToProps,
    { getOrders, clearErrors, resetCheckout }
)(Orders);
