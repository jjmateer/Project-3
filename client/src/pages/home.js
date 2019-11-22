import React, { Component } from "react";
import Search from "../components/homelayout/search/search";
import Homediscount from "../components/homelayout/homediscount/homediscount";
import Merchandise from "../components/homelayout/merchandise-slide/merchandise-slide"
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import PropTypes from "prop-types";
import "../components/homelayout/style.css"


class Home extends Component {
    state = {
        message: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    render() {
        return (
            <div >
                < Search />
                <h1 className="slider-label">Best Deals In Store</h1>
                < Homediscount />
                <h1 className="slider-label">Merchandise</h1>
                <Merchandise />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.error
})

export default connect(
    mapStateToProps,
    { clearErrors }
)(Home);
