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
                <a href="/">home</a>
                <a href="/signup">signup</a>
                <a href="/browse">browse</a>
                <a href="/cart">cart</a>
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
