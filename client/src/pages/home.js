import React, { Component } from "react";
import Nav from "../components/nav/navhome";
import Homelayout from "../components/homelayout/homelayout"
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import PropTypes from "prop-types";


class Home extends Component {
    state = {
        email: "",
        password: "",
        message: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    render() {
        return (

            <div >
                <Nav />
                {this.props.isAuthenticated ? <h1>User logged in</h1> : <h1>User not logged in</h1>}
                <h1 className="page-title">Home</h1>
                < Homelayout />
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
    { clearErrors }
)(Home);
