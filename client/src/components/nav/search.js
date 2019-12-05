import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getByCategory, getByName } from "../../actions/productActions";
import { clearErrors } from "../../actions/errorActions";
import PropTypes from "prop-types";


class Search extends Component {
    state = {
        query: "",
        msg: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        getByCategory: PropTypes.func.isRequired,
        getByName: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    handleCategorySearch = event => {
        this.props.getByCategory(event.target.id)
    }
    handleInputChange = event => {
        this.setState({
            query: event.target.value
        })
    }
    handleNameSearch = () => {
        this.props.getByName(this.state.query)
    }
    render() {
        return (

            <div id="searchjoin">
                <input type="text" onChange={this.handleInputChange} className="Osearch" placeholder="Search.." />
                <div className="dropdown">
                    <button className="dropbtn">Categories</button>
                    <div className="dropdown-content">
                        <Link onClick={this.handleCategorySearch} to="/browse" id="all">All</Link>
                        <Link onClick={this.handleCategorySearch} to="/browse" id="monitor">Monitors</Link>
                        <Link onClick={this.handleCategorySearch} to="/browse" id="desktop">Desktops</Link>
                        <Link onClick={this.handleCategorySearch} to="/browse" id="laptop">Laptops</Link>
                        <Link onClick={this.handleCategorySearch} to="/browse" id="speaker">Speakers</Link>
                        <Link onClick={this.handleCategorySearch} to="/browse" id="router">Routers</Link>
                        <Link onClick={this.handleCategorySearch} to="/browse" id="phone">Phones</Link>
                        <Link onClick={this.handleCategorySearch} to="/browse" id="accessories">Accessories</Link>
                    </div>
                </div>
                <Link onClick={this.handleNameSearch} className="Obutton" to="/browse"><i className="fa fa-search"></i></Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item,
    items_search: state.items_search,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(
    mapStateToProps,
    { getByCategory, getByName, clearErrors }
)(Search);
