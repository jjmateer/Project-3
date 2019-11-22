import React, { Component } from "react";
import ProductList from "../components/productlist/product-list";
import ProductListItem from "../components/productListItem/product-list-item";
import { connect } from "react-redux";
import { addToCart } from "../actions/productActions";
import { clearErrors } from "../actions/errorActions";
import PropTypes from "prop-types";


class BrowseByCategory extends Component {
    state = {
        msg: null
    };
    static propTypes = {
        addToCart: PropTypes.func.isRequired,
        user: PropTypes.object,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    componentDidMount() {
        this.props.clearErrors();
    }
    addItemToCart = event => {
        this.props.addToCart(this.props.user.id, event.target.id);
    }
    render() {
        const items_search = this.props.item.items_search;
        return (
            <div>
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
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(
    mapStateToProps,
    { addToCart, clearErrors }
)(BrowseByCategory);
