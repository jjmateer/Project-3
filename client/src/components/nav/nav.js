import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearErrors } from "../../actions/errorActions";
import PropTypes from "prop-types";
import Search from "./search";
import { logout } from "../../actions/authActions";
import { slide as Menu } from 'react-burger-menu'
import "./nav.css";

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: null,
            menuOpen: false,
            text: ''
        }
    }
    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }
    closeMenu() {
        this.setState({ menuOpen: false })
    }
    toggleMenu() {
        this.setState(state => ({ menuOpen: !state.menuOpen }))
    }
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
                    <Link className="logo" to="/">RealTech</Link>
                    <Menu right noOverlay isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)} id="hamburger">
                        <Link onClick={() => this.toggleMenu()} to="/">Home</Link>
                        <Link onClick={() => this.toggleMenu()} to="/browse">Search</Link>
                        {this.props.isAuthenticated ? null : <Link onClick={() => this.toggleMenu()} to="/login">Log in</Link>}
                        {this.props.isAuthenticated ? null : <Link onClick={() => this.toggleMenu()} to="/signup">Sign up</Link>}
                        {this.props.isAuthenticated ? <Link onClick={() => this.toggleMenu()} to="/orders">Orders</Link> : null}
                        {this.props.isAuthenticated ? <Link onClick={() => this.toggleMenu()} to="/cart">Cart</Link> : null}
                        {this.props.isAuthenticated ? <Link onClick={() => this.toggleMenu()} to="/" onClick={this.props.logout}>Logout</Link> : null}
                    </Menu>
                </div>
                < Search />
                <div className="global-header-right">
                    {this.props.isAuthenticated ? null : <Link to="/login">Log in</Link>}
                    {this.props.isAuthenticated ? null : <Link to="/signup">Sign up</Link>}
                    {this.props.isAuthenticated ? <Link to="/cart">Cart</Link> : null}
                    {this.props.isAuthenticated ? <Link to="/orders">Orders</Link> : null}
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
    { clearErrors, logout }
)(Nav);