import React, { Component } from "react";
import SignupForm from "../components/signup";
import API from "../utils/API";

class Signup extends Component {
    state = {
        email: "",
        password: ""
    };
    // handleEmailChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     })

    // };
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
