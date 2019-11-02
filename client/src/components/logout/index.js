import React, { Component } from "react";
import {connect } from "react-redux"
import { logout } from "../../actions/authActions";
import PropTypes from "prop-types";
import "./style.css"
export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}

export default connect (
    null, 
    { logout }
    ) (Logout);