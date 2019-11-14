import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getByCategory } from "../../../actions/productActions";
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
        clearErrors: PropTypes.func.isRequired
    }
    handleCategorySearch = event => {
        event.preventDefault();
        // console.log(`TID: ${event.target.id}`)
        this.setState({
            query: event.target.id
        })
        const { query } = this.state;
        this.props.getByCategory(query)
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
                            <Link onClick={this.handleCategorySearch} to="/browse" id="monitor">Monitors</Link>
                            <Link onClick={this.handleCategorySearch} to="/browse" id="desktop">Desktops</Link>
                            <Link onClick={this.handleCategorySearch} to="/browse" id="laptop">Laptops</Link>
                            <Link onClick={this.handleCategorySearch} to="/browse" id="speaker">Speakers</Link>
                            <Link onClick={this.handleCategorySearch} to="/browse" id="router">Routers</Link>
                            <Link onClick={this.handleCategorySearch} to="/browse" id="phone">Phones</Link>
                            <Link onClick={this.handleCategorySearch} to="/browse" id="accessories">Accessories</Link>
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
    { getByCategory, clearErrors }
)(Search);
