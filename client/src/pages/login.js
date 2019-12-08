import React, { Component } from "react";
import LoginForm from "../components/auth-components/login-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";
import {resetCheckout} from "../actions/transactionActions";


class Login extends Component {
    state = {
        email: "",
        password: "",
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        resetCheckout: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.resetCheckout();
    }
    componentDidUpdate(prevPreps) {
        const { error } = this.props;
        if (error !== prevPreps.error) {
            if (error.id === "LOGIN_FAIL") {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }
    }
    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleFormSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;

        const loginUser = {
            email,
            password
        }
        //attempt to login
        this.props.login(loginUser)

    };

    render() {
        return (
            <div>
                {this.props.error.msg.msg ? <h1 id="error-header">{this.props.error.msg.msg}</h1> : null}
                    <LoginForm
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                </div>
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    auth: state.auth,
    error: state.error
})

export default connect(
    mapStateToProps,
    { login, clearErrors, resetCheckout }
)(Login);