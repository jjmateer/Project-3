import React, { Component } from "react";
import SignupForm from "../components/signup/signup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";


class Signup extends Component {
    state = {
        username: "",
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
    componentDidMount() {
        this.props.clearErrors();
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
    handleNameChange = event => {
        this.setState({
            username: event.target.value
        })
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
        const { username, email, password } = this.state;

        const newUser = {
            username,
            email,
            password
        }
        //attempt to register
        this.props.register(newUser);
    };

    render() {
        return (
            <div className="App signup-page">

                {this.props.error.msg.msg ? <h1 id="error-header">{this.props.error.msg.msg}</h1> : null}
                <SignupForm
                    handleNameChange={this.handleNameChange}
                    handleEmailChange={this.handleEmailChange}
                    handlePasswordChange={this.handlePasswordChange}
                    handleFormSubmit={this.handleFormSubmit}
                    q={this.state.q}
                />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

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
