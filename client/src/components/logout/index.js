import React, { Component } from "react";
import { connect } from "react-redux"
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
                <a href="#" onClick={this.props.logout}>Logout</a>
            </div>
        )
    }
}

export default connect(
    null,
    { logout }
)(Logout);