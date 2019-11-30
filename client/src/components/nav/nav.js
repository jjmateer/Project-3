import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearErrors } from "../../actions/errorActions";
import PropTypes from "prop-types";
import Search from "../homelayout/search/search"
import { logout } from "../../actions/authActions";
import "./nav.css";
import "../homelayout/style.css"

class Nav extends Component {
    state = {
        message: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired
    }
    render() {
        return (
            <div className="global-header" >
                <div className="global-header-left">
                    <Link to="/"> <h1 className="NameDesign">RealTech</h1></Link>
                    </div>
                < Search />
                <div className="global-header-right">
                    <Link to="/">Home</Link>
                    {this.props.isAuthenticated ? null : <Link to="/login">Log in</Link>}
                    {this.props.isAuthenticated ? null : <Link to="/signup">Sign up</Link>}
                    <Link to="/browse">Browse</Link>
                    {this.props.isAuthenticated ? <Link to="/cart">Cart</Link> : null}
                    {this.props.isAuthenticated ? <Link to="/" onClick={this.props.logout}>Logout</Link> : null}
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
    { clearErrors, logout  }
)(Nav);