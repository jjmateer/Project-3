import React, { Component } from "react";
import Homediscount from "../components/sliders/homediscount";
import Merchandise from "../components/sliders/merchandise-slide";
import Featured from "../components/sliders/featured-slider";
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import LoadIcon from "../components/loader/loader"
import PropTypes from "prop-types";


class Home extends Component {
    state = {
        message: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object,
        item: PropTypes.object,
        auth: PropTypes.object.isRequired,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.clearErrors();
    }
    render() {
        return (
            this.props.auth.isLoading ? <h1 className="page-title"><LoadIcon /></h1> :
                <div >
                    < div>
                    </div>
                    {this.props.item.loading ? <h1 className="page-title"><LoadIcon /></h1> : null}
                    <div>
                        <h1 className="slider-label">Featured</h1>
                        <Featured />
                        <h1 className="slider-label">Under $100</h1>
                        < Homediscount />
                        <h1 className="slider-label">Merchandise</h1>
                        <Merchandise />
                    </div>


                </div >
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    auth: state.auth,
    item: state.item,
    error: state.error
})

export default connect(
    mapStateToProps,
    { clearErrors }
)(Home);
