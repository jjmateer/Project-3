import React, { Component } from "react";
import ProductList from "../components/productlist";
import ProductListItem from "../components/productListItem";
import { connect } from "react-redux";
import {addToCart } from "../actions/productActions";
import { clearErrors } from "../actions/errorActions";
import PropTypes from "prop-types";


class BrowseByCategory extends Component {
    state = {
        msg: null
    };
    static propTypes = {
        addToCart: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    addItemToCart = event => {
        this.props.addToCart(event.target.id);
    }
    render() {
        const  items_search  = this.props.item.items_search;
        return (
            <div>
                {this.props.isAuthenticated ? <h1 className="login-style">Welcome!</h1> : <h1 className="notlogin-style">User not logged in</h1>}
                <ProductList>
                    {items_search.map(({ _id, image, item, brand, price, description }) => (
                        <ProductListItem
                        key={_id}
                        id={_id}
                        image={image}
                        product={item}
                        brand={brand}
                        price={price}
                        description={description}
                        addItemToCart={this.addItemToCart}
                        />
                    ))}
                </ProductList>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    item: state.item,
    items_search: state.item.items_search,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(
    mapStateToProps,
    { addToCart, clearErrors }
)(BrowseByCategory);
