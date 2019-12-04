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
        user: PropTypes.object,
        orders: PropTypes.array,
        isAuthenticated: PropTypes.bool,
        clearErrors: PropTypes.func.isRequired,
        getOrders: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.getOrders(this.props.user._id);
    }
    render() {
        const user_orders = this.props.orders;
        return (
            <div>
                {/* {this.props.auth.isLoading ? <h1 className="page-title"><LoadIcon /></h1> : null}
                <div className="order-list">
                    {user_orders.map(({ _id, items, user }) => (
                        <div
                            key={_id}
                            id={_id}
                            items={items}
                            user={user}
                        />
                    ))}
                </div> */}
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
