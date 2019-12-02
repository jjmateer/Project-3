import React, { Component } from "react";
import ProductList from "../components/product-components/product-list";
import ProductListItem from "../components/product-components/product-list-item";
import { connect } from "react-redux";
import { addToCart } from "../actions/productActions";
import { clearErrors } from "../actions/errorActions";
import LoadIcon from "../components/loader/loader"
import PropTypes from "prop-types";


class Browse extends Component {
    state = {
        quantity: null,
        msg: null
    };
    static propTypes = {
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
    getDropdownValue = event => {
        this.setState({quantity: event.target.value})
    }
    addItemToCart = event => {
        this.props.addToCart(this.props.user._id, event.target.id, this.state.quantity);
        alert("Item added to cart.")
    }
    render() {
        const items_search = this.props.item.items_search;
        return (
            this.props.auth.isLoading ?<h1 className="page-title"><LoadIcon/></h1> :
            <div>
                {items_search ?
                    <div>
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
                                    getDropdownValue={this.getDropdownValue}
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
    { addToCart, clearErrors }
)(Browse);
