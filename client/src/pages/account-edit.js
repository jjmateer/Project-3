import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { resetCheckout, getUserCart } from "../actions/transactionActions";
import { clearErrors } from "../actions/errorActions";
import { loadUser } from "../actions/authActions";
import { updateCredentials } from "../actions/authActions";
// import LoadIcon from "../components/loader/loader";
import PropTypes from "prop-types";
import "../components/product-components/view-item.css"
import store from "../store";
import jwt_decode from "jwt-decode";
import "../components/auth-components/account.css";

class AccountEdit extends Component {
    state = {
        editName: false,
        editEmail: false,
        editPassword: false,
        nameChange: "",
        emailChange: "",
        passwordChange: ""
    };
    static propTypes = {
        user: PropTypes.object,
        isAuthenticated: PropTypes.bool,
        resetCheckout: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        updateCredentials: PropTypes.func.isRequired,
        loadUser: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.resetCheckout();
        if (localStorage.getItem("jwtToken")) {
            store.dispatch(getUserCart(jwt_decode(localStorage.getItem("jwtToken")).id));
        }
    }
    showInput = event => {
        this.setState({ [event.target.className]: true });
    };
    submitChange = event => {
        switch (event.target.className) {
            case "editName":
                this.props.updateCredentials(event.target.className, this.props.user._id, {data: this.state.nameChange})
                break;
            case "editEmail":
                this.props.updateCredentials(event.target.className, this.props.user._id, {data: this.state.emailChange})
                break;
            case "editPassword":
                this.props.updateCredentials(event.target.className, this.props.user._id, {data: this.state.passwordChange})
                break;

        }
        this.setState({ [event.target.className]: false })
    }
    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        const { goBack } = this.props.history;
        return (
            <div className="account-info-container">
                <h1 className="page-title">Account Details</h1>
                {!this.state.editName ?
                    <div className="user-name">Name: {this.props.user.name}<br /> <button onClick={this.showInput} className="editName">Edit name</button></div>
                    : <div>New name: <input id="nameChange" onChange={this.handleInputChange} /><button id="submitName" onClick={this.submitChange} className="editName">Ok</button></div>}
                {!this.state.editEmail ?
                    <div className="user-email">Email: {this.props.user.email}<br /> <button onClick={this.showInput} className="editEmail">Edit Email</button></div>
                    : <div>New email: <input id="emailChange" onChange={this.handleInputChange} /><button id="submitName" onClick={this.submitChange} className="editEmail">Ok</button></div>}
                {!this.state.editPassword ?
                    <div className="user-password">Password<br />  <button onClick={this.showInput} className="editPassword">Edit Password</button></div>
                    : <div>New password: <input id="passwordChange" onChange={this.handleInputChange} /><button id="submitName" onClick={this.submitChange} className="editPassword">Ok</button></div>}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    user: state.auth.user,
    error: state.error,
})

export default connect(
    mapStateToProps,
    { clearErrors, resetCheckout, loadUser, updateCredentials }
)(AccountEdit);
