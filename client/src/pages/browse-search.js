import React, { Component } from "react";
import ProductList from "../components/productlist";
import ProductListItem from "../components/productListItem";
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import PropTypes from "prop-types";


class BrowseByCategory extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    render() {
        const  items_search  = this.props.item.items_search;
        console.log(items_search)
        return (
            <div>
                {this.props.isAuthenticated ? <h1 className="login-style">Welcome!</h1> : <h1 className="notlogin-style">User not logged in</h1>}
                {/* {items_search.length < 1 ? 
                <h1>No items found.</h1> : */}
                <ProductList>
                    {items_search.map(({ _id, image, item, brand, price, description }) => (
                        <ProductListItem
                            key={_id}
                            image={image}
                            product={item}
                            brand={brand}
                            price={price}
                            description={description}
                        />
                    ))}
                </ProductList>
                {/* } */}
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
    { clearErrors }
)(BrowseByCategory);
