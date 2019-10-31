import React, { Component } from "react";
import SignupForm from "../components/signup";
import API from "../utils/API";

class Signup extends Component {
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
        API.register({
            email: this.state.email,
            password: this.state.password
        })
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

export default Signup;
