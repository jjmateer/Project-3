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
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        clearErrors: PropTypes.func.isRequired,
        getOrders: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.getOrders();
    }
    render() {
        return (
            <div>
                {this.props.auth.isLoading ? <h1 className="page-title"><LoadIcon /></h1> : null}
            </div>

        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    user: state.auth.user,
    error: state.error,
})

export default connect(
    mapStateToProps,
    { getOrders, clearErrors }
)(Orders);
