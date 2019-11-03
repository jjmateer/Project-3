import React, { Component } from "react";
import LoginForm from "../components/loginform";
import API from "../utils/API";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";
import Nav from "../components/nav/navlogin";


class Login extends Component {
    state = {
        email: "",
        password: "",
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevPreps) {
        const { error } = this.props;
        if (error !== prevPreps.error) {
            //check for err
            if (error.id === "LOGIN_FAIL") {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }
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
        API.login({
            email: this.state.email,
            password: this.state.password
        })
    };

    render() {
        return (
            <div className="App">
                <Nav />

                <h1 className="page-title">Login</h1>

                <div className="content-wrapper">
                    <div>
                        <LoginForm
                            handleEmailChange={this.handleEmailChange}
                            handlePasswordChange={this.handlePasswordChange}
                            handleFormSubmit={this.handleFormSubmit}
                            q={this.state.q}
                        />
                    </div>
                </div>
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
    { login, clearErrors }
)(Login);

