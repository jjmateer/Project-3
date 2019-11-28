import React, { Component } from "react";
import ProductList from "../components/productlist/product-list";
import ProductListItem from "../components/productListItem/product-list-item";
import { connect } from "react-redux";
import { addToCart } from "../actions/productActions";
import { clearErrors } from "../actions/errorActions";
import Search from "../components/homelayout/search/search";
import LoadIcon from "../components/loader/loader"
import PropTypes from "prop-types";


class BrowseByCategory extends Component {
    state = {
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
        this.props.isAuthenticated ?
            this.setState({ authenticated: true })
            :
            this.setState({ authenticated: false })
            this.props.clearErrors();
    }
    addItemToCart = event => {
        this.props.addToCart(this.props.user._id, event.target.id);
        alert("Item added to cart.")
    }
    render() {
        const items_search = this.props.item.items_search;
        return (
            <div>
                <h1 className="page-title">Search</h1>
                <Search/>
                {this.props.item.loading ? <h1 className="page-title"><LoadIcon /></h1> : null}
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
    { addToCart, clearErrors }
)(BrowseByCategory);
