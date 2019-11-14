import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getItems } from "../../../actions/productActions";
import { clearErrors } from "../../../actions/errorActions";
import PropTypes from "prop-types";
// import "../style.css";



class Search extends Component {
    handleCategorySearch = event => {
        this.setState({
            items_by_category: event.target.value
        })
    }
    render() {
        return (
            <div className="homelayout" >
                {/* *************************************** */}

                < div className="bgimg-1" >
                    <div className="titleArea emboss">
                        <h1 id="homeh1">Technologies of The Future</h1>
                        <h2 id="homeh2">Your Ideas Made Real</h2>
                    </div>
                </div>

                <div className="Osearch-container">
                    <input type="text" className="Osearch" placeholder="Search.." /><i className="fa fa-search"></i>


                    {/* Dropdown for Categories */}
                    <div className="dropdown">
                        <button className="dropbtn">Categories</button>
                        <div className="dropdown-content">
                            <Link onChange={this.handleCategorySearch} to="/browse">Monitors</Link>
                            <Link onChange={this.handleCategorySearch} to="/browse">Desktops</Link>
                            <Link onChange={this.handleCategorySearch} to="/browse">Laptops</Link>
                            <Link onChange={this.handleCategorySearch} to="/browse">Speakers</Link>
                            <Link onChange={this.handleCategorySearch} to="/browse">Routers</Link>
                            <Link onChange={this.handleCategorySearch} to="/browse">Phones</Link>
                            <Link onChange={this.handleCategorySearch} to="/browse">Accessories</Link>
                        </div>
                    </div>
                    <input className="Obutton" type="button" value="Search" />
                </div>
                {/* <!-- bgimg-1 --> */}


                {/* ***************************************** */}
            </div >
        )
    }
}

const mapStateToProps = state => ({
    item: state.item,
    items_by_category: state.items_by_category,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(
    mapStateToProps,
    { getItems, clearErrors }
)(Search);
