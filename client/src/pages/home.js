import React, { Component } from "react";
import Homelayout from "../components/homelayout";
// import Homediscount from "../components/homediscount";
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
                {this.props.isAuthenticated ? <h1 className="login-style">Welcome!</h1> : <h1 className="notlogin-style">   User not logged in</h1>}

                <h1 className="page-title">Home</h1>
                < Homelayout />
                {/* < Homediscount /> */}
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
