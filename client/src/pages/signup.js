import React, { Component } from "react";
import SignupForm from "../components/signup";
import API from "../utils/API";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../actions/authActions"

class Signup extends Component {
    state = {
        email: "",
        password: "",
        message: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    }
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();
        API.register({
            email: this.state.email,
            password: this.state.password
        })
        const { email, password } = this.state;

        const newUser ={
            email,
            password
        }
        //attempt to register
        this.props.register(newUser);
    };

    render() {
        return (
            <div className="App">
                <a href="/">home</a>
                <a href="/login">login</a>
                <a href="/browse">browse</a>
                <a href="/cart">cart</a>
                <SignupForm
                    handleEmailChange={this.handleEmailChange}
                    handlePasswordChange={this.handlePasswordChange}
                    handleFormSubmit={this.handleFormSubmit}
                    q={this.state.q}
                />
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
    { register }
)(Signup);
