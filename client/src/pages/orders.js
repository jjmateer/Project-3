import React, { Component } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import { getOrders } from "../actions/authActions";
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
        orders: PropTypes.object.isRequired,
        getOrders: PropTypes.func
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.getOrders(this.props.user._id)
    }
    render() {
        const { orders } = this.props.auth;
        console.log(orders)
        return (
            <div>
                {this.props.auth.isLoading ? <h1 className="page-title"><LoadIcon /></h1> : null}
                <div>
                    {/* {orders.map(({ _id, items }) => (
                        <ul className="order-list" key={_id}>
                            <p>Order ID: {_id}</p>
                            {items.map(({ _id, item, quantity, price }) => (
                                <li className="order-item" key={_id}>
                                    <p>Product: {item}(${quantity * price}.00)</p>
                                    <p>Quantity: {quantity}</p>
                                    <p>Price per unit: ${price}.00</p>
                                </li>

                            ))}
                        </ul>
                    ))} */}
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
    { getOrders, clearErrors }
)(Orders);
