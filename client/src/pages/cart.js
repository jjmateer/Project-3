import React, { Component } from "react";
import Nav from "../components/nav/navcart"
import Cartlayout from "../components/cart/cartlayout"
<<<<<<< HEAD
function Cart() {
    return (
        <div>
            <Nav />
            <h1 className="page-title">Cart</h1>

            <Cartlayout />
            
        </div>
    );
=======
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
                <Nav />
                {this.props.isAuthenticated ? <h1>User logged in</h1> : <h1>User not logged in</h1>}
                <h1 className="page-title">Cart</h1>

                <Cartlayout />
            </div>
        );
    } 
>>>>>>> b251b036a37b8ff65c275665e44fdbb4f131d1bb
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(
    mapStateToProps,
    { clearErrors }
)(Cart);

