import React, { Component } from "react";
import SignupForm from "../components/signup";
import API from "../utils/API";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";
import Nav from "../components/nav/navsignup";


class Signup extends Component {
    state = {
        email: "",
        password: "",
        message: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevPreps) {
        const { error } = this.props;
        if (error !== prevPreps.error) {
            //check for err
            if (error.id === "REGISTER_FAIL") {
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
        API.register({
            email: this.state.email,
            password: this.state.password
        })
        const { email, password } = this.state;

        const newUser = {
            email,
            password
        }
        //attempt to register
        this.props.register(newUser);
    };

    render() {
        return (
            <div className="App">
                <Nav />
                {this.state.msg ? <h1>Authentication failed</h1> : null}
                {this.props.isAuthenticated ? <h1 className="login-indicator-style">User logged in</h1> : <h1 className="login-indicator-style">User not logged in</h1>}
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
    { register, clearErrors }
)(Signup);
