import React, { Component } from "react";
import LoginForm from "../components/loginform";

class Login extends Component {
    state = {
        email: "",
        password: "",
        message: "Search For A Book!"
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })

    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };

    render() {
        return (
            <div className="App">
                <LoginForm
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    q={this.state.q}
                />
            </div>
        );
    }
}

export default Login;
