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
        auth: PropTypes.object,
        item: PropTypes.object.isRequired,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired
    }
    render() {
        const { user_cart } = this.props.item;
        var cartLength = user_cart.length
        return (
            <>
                <div className="global-header" >
                    <div className="global-header-left">
                        <Link className="logo" to="/">RealTech</Link>
                        <Menu right noOverlay isOpen={this.state.menuOpen}
                            onStateChange={(state) => this.handleStateChange(state)} id="hamburger">
                            <Link onClick={() => this.toggleMenu()} to="/">Home</Link>
                            <Link onClick={() => this.toggleMenu()} to="/browse">Search</Link>
                            {this.props.isAuthenticated ? null : <Link onClick={() => this.toggleMenu()} to="/login">Log in</Link>}
                            {this.props.isAuthenticated ? null : <Link onClick={() => this.toggleMenu()} to="/signup">Sign up</Link>}
                            {this.props.isAuthenticated ? <Link onClick={() => this.toggleMenu()} to="/account">Account</Link> : null}
                            {this.props.isAuthenticated ? <Link onClick={() => this.toggleMenu()} to="/cart">Cart{cartLength > 0 ? `(${cartLength})` : null}</Link> : null}
                            {this.props.isAuthenticated ? <Link onClick={() => this.toggleMenu()} to="/" onClick={this.props.logout}>Logout</Link> : null}
                        </Menu>
                    </div>
                    {!this.props.auth.user && this.props.auth.isLoading ? null :
                        <div id="searchjoin" className="large-search">
                            < Search />
                        </div>
                    }
                    {!this.props.auth.user && this.props.auth.isLoading ? null :
                        <div className="global-header-right">

                            {this.props.isAuthenticated ? null : <Link to="/login">Log in</Link>}
                            {this.props.isAuthenticated ? null : <Link to="/signup">Sign up</Link>}
                            {this.props.isAuthenticated ? <Link to="/cart">Cart{cartLength > 0 ? `(${cartLength})` : null}</Link> : null}
                            {this.props.isAuthenticated ? <Link to="/account">Account</Link> : null}
                            {this.props.isAuthenticated ? <Link to="/" onClick={this.props.logout}>Logout</Link> : null}
                        </div>
                    }
                </div>
                {/* <div className="light-beam" /> */}
            </>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    item: state.item,
    auth: state.auth,
    error: state.error
})

export default connect(
    mapStateToProps,
    { clearErrors, logout }
)(Nav);