import React, { Component } from "react";
import ProductList from "../components/productlist";
import ProductListItem from "../components/productListItem";
import { connect } from "react-redux";
import { getItems } from "../actions/productActions";
import { clearErrors } from "../actions/errorActions";
import PropTypes from "prop-types";


class BrowseByCategory extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    // componentDidMount() {
    //     this.props.getItems();
    // }
    render() {
        const { items_by_category } = this.props;
        console.log(items_by_category)
        return (
            <div>
                {this.props.isAuthenticated ? <h1 className="login-style">Welcome!</h1> : <h1 className="notlogin-style">User not logged in</h1>}
                <h1>Browse</h1>
                {items_by_category.length < 1 ? 
                <h1>No items found.</h1> :
                <ProductList>
                    {items_by_category.map(({ _id, image, product, brand, price, description }) => (
                        <ProductListItem
                            key={_id}
                            image={image}
                            product={product}
                            brand={brand}
                            price={price}
                            description={description}
                        />
                    ))}
                </ProductList>
                }
            </div>
        );
    }
}
const mapStateToProps = state => ({
    item: state.item,
    items_by_category: state.item.items_by_category,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(
    mapStateToProps,
    { getItems, clearErrors }
)(BrowseByCategory);
