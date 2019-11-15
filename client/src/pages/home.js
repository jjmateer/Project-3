import React, { Component } from "react";
import Search from "../components/homelayout/search";
import Homediscount from "../components/homelayout/homediscount";
import Picturesglider from "../components/homelayout/picturesglider"
import Merchandise from "../components/homelayout/merchandise-slide/merchandise-slide"
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import PropTypes from "prop-types";
import "../components/homelayout/style.css"


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
                {this.props.isAuthenticated ? <h1 className="login-style">Welcome!</h1> : <h1 className="notlogin-style">User not logged in</h1>}
                < Search />
                <h1 style={{ marginLeft: "80px" }}>Best Deal in Store</h1>
                < Homediscount />
                <h1 style={{ marginLeft: "80px", marginBottom: "-10px" }}>Monitors</h1>
                < Picturesglider />
                <h1 style={{ marginLeft: "80px" }}>Merchandise</h1>
                <Merchandise />
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
