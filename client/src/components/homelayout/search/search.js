import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getByCategory, getByName } from "../../../actions/productActions";
import { clearErrors } from "../../../actions/errorActions";
import PropTypes from "prop-types";
// import "../style.css";


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
            <div className="homelayout" >
                < div className="bgimg-1" >
                    <div className="titleArea emboss">
                        <h1 id="homeh1">Technologies of The Future</h1>
                        <h2 id="homeh2">Your Ideas Made Real</h2>
                    </div>
                </div>

                <div className="Osearch-container">
                    <input type="text" onChange={this.handleInputChange} className="Osearch" placeholder="Search.." />


                    {/* Dropdown for Categories */}
                    <div className="dropdown">
                        <button className="dropbtn">Categories</button>
                        <div className="dropdown-content">
                            <Link onClick={this.handleCategorySearch} to="/browse-by-category" id="monitor">Monitors</Link>
                            <Link onClick={this.handleCategorySearch} to="/browse-by-category" id="desktop">Desktops</Link>
                            <Link onClick={this.handleCategorySearch} to="/browse-by-category" id="laptop">Laptops</Link>
                            <Link onClick={this.handleCategorySearch} to="/browse-by-category" id="speaker">Speakers</Link>
                            <Link onClick={this.handleCategorySearch} to="/browse-by-category" id="router">Routers</Link>
                            <Link onClick={this.handleCategorySearch} to="/browse-by-category" id="phone">Phones</Link>
                            <Link onClick={this.handleCategorySearch} to="/browse-by-category" id="accessories">Accessories</Link>
                        </div>
                    </div>
                    <Link onClick={this.handleNameSearch} className="Obutton" to="/browse-by-category"><i className="fa fa-search"> Search</i></Link>
                </div>
            </div >
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
