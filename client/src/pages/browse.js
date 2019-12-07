import React, { Component } from "react";
import ProductList from "../components/product-components/product-list";
import ProductListItem from "../components/product-components/product-list-item";
import { connect } from "react-redux";
import { addToCart } from "../actions/transactionActions";
import {viewItem} from  "../actions/productActions";
import { clearErrors } from "../actions/errorActions";
import LoadIcon from "../components/loader/loader"
import PropTypes from "prop-types";
import Search from "../components/nav/search";


class Browse extends Component {
    state = {
        quantity: 1,
        msg: null
    };
    static propTypes = {
        user: PropTypes.object,
        addToCart: PropTypes.func.isRequired,
        viewItem: PropTypes.func.isRequired,
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
    viewItem = event => {
        this.props.viewItem(event.target.id);
    }
    render() {
        const items_search = this.props.item.items_search;
        return (
            this.props.auth.isLoading ? <h1 className="page-title"><LoadIcon /></h1> :
                <div>
                    {items_search ?
                        <div id="browse-div">
                            {/* {this.props.item.loading ? <h1 className="page-title"><LoadIcon /></h1> : null} */}
                            <div id="mobileSearch">
                                <Search />
                            </div>
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
                                        viewItem={this.viewItem}
                                        authenticated={this.state.authenticated}
                                    />
                                ))}
                            </ProductList>
                        </div> : <h1 className="page-title">No items found.</h1>}
                </div>
        );
    }
}
const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    user: state.auth.user,
    error: state.error,
})

export default connect(
    mapStateToProps,
    { addToCart, viewItem, clearErrors }
)(Browse);
