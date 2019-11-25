import React, { Component } from "react";
import Search from "../components/homelayout/search/search";
import Homediscount from "../components/homelayout/homediscount/homediscount";
import Merchandise from "../components/homelayout/merchandise-slide/merchandise-slide"
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import PropTypes from "prop-types";
import LoadIcon from "../components/loader/loader";
import "../components/homelayout/style.css"


class Home extends Component {
    state = {
        message: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object,
        item: PropTypes.object,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.clearErrors();
    }
    render() {
        return (
            <div >
                < div className="bgimg-1" >
                    <div className="titleArea emboss">
                        <h1 id="homeh1">Technologies of The Future</h1>
                        <h2 id="homeh2">Your Ideas Made Real</h2>
                    </div>
                </div>
                < Search />
                {this.props.item.loading ? <h1 className="page-title"><LoadIcon /></h1> : null}
                <div>
                    <h1 className="slider-label">Merchandise</h1>
                    <Merchandise />
                    <h1 className="slider-label">Best Deals In Store</h1>
                    < Homediscount />
                </div>


            </div >
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    item: state.item,
    error: state.error
})

export default connect(
    mapStateToProps,
    { clearErrors }
)(Home);
