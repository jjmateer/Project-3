import React, { Component } from "react";
import LoginForm from "../components/loginform";
import API from "../utils/API";

class Login extends Component {
    state = {
        email: "",
        password: ""
    };
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
                <a href="/">home</a>
                <a href="/signup">signup</a>
                <a href="/browse">browse</a>
                <a href="/cart">cart</a>
                <LoginForm
                    handleEmailChange={this.handleEmailChange}
                    handlePasswordChange={this.handlePasswordChange}
                    handleFormSubmit={this.handleFormSubmit}
                    q={this.state.q}
                />
            </div>
        );
    }
}
export default Login;
