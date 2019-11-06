import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearErrors } from "../../actions/errorActions";
import PropTypes from "prop-types";
import Logout from "../logout"
import "./style.css";

class Nav extends Component {
    state = {
        message: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    render() {
        return (
            <div className="global-header" >
                <div className="global-header-left">
                    <h1>StoreFront</h1>
                </div>

                <div className="global-header-right">
                    <Link to="/">Home</Link>
                    {this.props.isAuthenticated ? null : <Link to="/login">Log In</Link>}
                    {this.props.isAuthenticated ? null : <Link to="/signup">Sign Up</Link>}
                    <Link to="/browse">Browse</Link>
                    <Link to="/cart">Cart </Link>
                    {this.props.isAuthenticated ? <Logout /> : null}
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(
    mapStateToProps,
    { clearErrors }
)(Nav);