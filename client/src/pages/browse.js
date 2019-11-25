import React, { Component } from "react";
import ProductList from "../components/productlist/product-list";
import ProductListItem from "../components/productListItem/product-list-item";
import { connect } from "react-redux";
import { getItems, addToCart } from "../actions/productActions";
import { clearErrors } from "../actions/errorActions";
import PropTypes from "prop-types";
import "./browse.css";
import Search from "../components/homelayout/search/search";
import { Link } from "react-router-dom";



class Browse extends Component {
    state = {
        authenticated: null,
        msg: null
    };
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        user: PropTypes.object,
        addToCart: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        clearErrors: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.getItems();
        this.props.isAuthenticated ?
            this.setState({ authenticated: true })
            :
            this.setState({ authenticated: false })

    }
    addItemToCart = event => {
        this.props.addToCart(this.props.user.id, event.target.id)
        alert("Item added to cart.")
    }
    render() {
        const { items } = this.props.item;
        return (
            <div className="browse-page">
                <h1 className="page-title">Browse All</h1>
                <div className="sidesearch">
                    <div>
                        <i className="whitesearch-icon">
                            <input className="search-expand" type="text" placeholder=" Search.." /></i>
                        {/* 
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

                                </div> */}
                    </div>
                </div>
                <ProductList>
                    {items.map(({ _id, image, item, brand, price, description }) => (
                        <ProductListItem
                            key={_id}
                            id={_id}
                            image={image}
                            product={item}
                            brand={brand}
                            price={price}
                            description={description}
                            addItemToCart={this.addItemToCart}
                            authenticated={this.state.authenticated}
                        />
                    ))}

                </ProductList>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.error,
})

export default connect(
    mapStateToProps,
    { getItems, addToCart, clearErrors }
)(Browse);
