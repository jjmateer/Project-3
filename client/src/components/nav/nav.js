import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearErrors } from "../../actions/errorActions";
import PropTypes from "prop-types";
import Search from "./search";
import { logout } from "../../actions/authActions";
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
                    <Link className="logo" to="/">RealTech</Link>
                    {!this.props.auth.user && this.props.auth.isLoading ? null :
                        <div id="searchjoin" className="large-search">
                            < Search />
                        </div>
                    }
                <div className="global-header-right"/>
                </div>
                <div className="light-beam" />
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