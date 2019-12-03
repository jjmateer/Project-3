import React, { Component } from "react";
import CartList from "../components/cart-components/cart-list";
import CartListItem from "../components/cart-components/cartItem";
import CartSummary from "../components/cart-components/cart-summary";
import CartTotal from "../components/cart-components/cart-total";
import { connect } from "react-redux";
import LoadIcon from "../components/loader/loader";
import { clearErrors } from "../actions/errorActions";
import { getUserCart, userCheckout } from "../actions/transactionActions";
import PropTypes from "prop-types";
class Cart extends Component {
    state = {
        msg: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        item: PropTypes.object,
        error: PropTypes.object.isRequired,
        getUserCart: PropTypes.func.isRequired,
        userCheckout: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.getUserCart(this.props.user._id);
    }

    checkoutRequest = event => {
        this.props.userCheckout(event.target.id)
    }
    render() {
        const user_cart = this.props.item.user_cart;
        return (
            this.props.auth.isLoading ? <h1 className="page-title"><LoadIcon /></h1> :
                <div>
                    {user_cart.length ? <h1 className="page-title">Cart</h1> :
                        <h1 className="page-title">{this.props.item.loading ? "Loading..." : null}</h1>}
                    <h1 className="page-title">{user_cart.length < 1 && !this.props.item.loading ? "Cart is empty." : null}</h1>
                    {this.props.item.loading ? <h1 className="page-title"><LoadIcon /></h1> :
                        <div>
                            {user_cart.length ?
                                <CartSummary>
                                    <CartTotal
                                        user_cart={user_cart}
                                    />
                                    <button className="checkoutBtn" id={this.props.user._id} onClick={this.checkoutRequest}>Check Out</button>
                                </ CartSummary>
                                : null}
                        </div>
                    }
                    {this.props.item.loading ? null :
                        <CartList>
                            {user_cart.length ?
                                user_cart.map(({ _id, image, item, brand, price, description }) => (
                                    <CartListItem
                                        key={_id}
                                        id={_id}
                                        image={image}
                                        product={item}
                                        brand={brand}
                                        price={price}
                                        description={description}
                                    />
                                ))

                                : null}
                        </CartList>
                    }
                </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    user: state.auth.user,
    error: state.error
})

export default connect(
    mapStateToProps,
    { getUserCart, clearErrors, userCheckout }
)(Cart);
