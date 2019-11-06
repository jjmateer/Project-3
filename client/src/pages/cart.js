import React, { Component } from "react";
import Cartlayout from "../components/cart"
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import PropTypes from "prop-types";
class Cart extends Component {
    state = {
        email: "",
        password: "",
        message: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    render() {
        return (
            <div>
                {this.props.isAuthenticated ? <h1 className="login-style">Welcome!</h1> : <h1 className="notlogin-style">User not logged in</h1>}
                <h1 className="page-title">Cart</h1>

                <Cartlayout />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(
    mapStateToProps,
    { clearErrors }
)(Cart);

