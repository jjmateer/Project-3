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
        orders: PropTypes.array.isRequired,
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
                    {orders.map(({ _id, items, total }) => (
                        <ul className="order-list" key={_id}>
                            <li className="order-item">
                                <p id="total-order-price">Order ID: {_id}</p>
                                <p  id="total-order-price">Order total: ${total}.00</p>
                                {items.map(({ _id, item, quantity, price, image, brand }) => (
                                    <div className="order-info" key={_id}>
                                        <img className="order-item-img" src={image}></img>
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
    { getOrders, clearErrors }
)(Orders);
