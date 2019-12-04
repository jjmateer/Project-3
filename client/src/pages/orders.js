import React, { Component } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import { getOrders } from "../actions/authActions";
import LoadIcon from "../components/loader/loader"
import PropTypes from "prop-types";


class Orders extends Component {
    state = {
        msg: null
    };
    static propTypes = {
        user: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        clearErrors: PropTypes.func.isRequired,
        orders: PropTypes.array,
        getOrders: PropTypes.func
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.getOrders(this.props.user._id);
    }
    render() {
        const { orders } = this.props.auth;
        console.log(orders)
        return (
            <div>
                {/* {this.props.auth.isLoading ? <h1 className="page-title"><LoadIcon /></h1> : null} */}
                <div className="order-list">
                    {orders.map(({ _id, items, user }) => (
                        <div key={_id}>
                            <p>{_id}</p>
                            {items.map(({ item, quantity }) => (
                                <div>
                                <p>{item}</p>
                                <p>{quantity}</p>
                                </div>
                            ))}
                        </div>
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
