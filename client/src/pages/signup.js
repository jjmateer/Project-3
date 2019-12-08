import React, { Component } from "react";
import SignupForm from "../components/auth-components/signup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoadIcon from "../components/loader/loader";
import { register } from "../actions/authActions";
import {resetCheckout} from "../actions/transactionActions";
import { clearErrors } from "../actions/errorActions";


class Signup extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          password: "",
          password2: "",
          msg: null
        };
      }

      static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        resetCheckout: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.resetCheckout();
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
    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleFormSubmit = event => {
        event.preventDefault();
        const { name, email, password, password2 } = this.state;

        const newUser = {
            name: name,
            email: email,
            password: password,
            password2: password2
        }
        //attempt to register
        this.props.register(newUser);
    };

    render() {
        return (
            this.props.auth.isLoading ?<h1 className="page-title"><LoadIcon/></h1> :
            <div>

                {this.props.error.msg.msg ? <h1 id="error-header">{this.props.error.msg.msg}</h1> : null}
                <SignupForm
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
    { register, clearErrors, resetCheckout }
)(Signup);