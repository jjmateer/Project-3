import React, { Component } from "react";
import CartList from "../components/cart-components/cart-list";
import CartListItem from "../components/cart-components/cartItem";
import CartSummary from "../components/cart-components/cart-summary";
import CartTotal from "../components/cart-components/cart-total";
import { connect } from "react-redux";
import LoadIcon from "../components/loader/loader";
import { clearErrors } from "../actions/errorActions";
import { getUserCart, userCheckout, resetCheckout } from "../actions/transactionActions";
import { getOrders } from "../actions/authActions";
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
        resetCheckout: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        getOrders: PropTypes.func
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.getUserCart(this.props.user._id);
        this.props.resetCheckout();
        this.props.getOrders(this.props.user._id)
    }

    checkoutRequest = event => {
        this.props.userCheckout(event.target.id)
    }
    render() {
        const user_cart = this.props.item.user_cart;
        return (
            this.props.auth.isLoading ? <h1 className="page-title"><LoadIcon /></h1> :
                <div>
                    {this.props.item.checkout === true ? <h1 className="page-title">Checkout Success!</h1> : null}
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
                                user_cart.map(({ item, quantity }) => (
                                    <CartListItem
                                        key={item._id}
                                        id={item.b_id}
                                        image={item.image}
                                        product={item.item}
                                        brand={item.brand}
                                        price={item.price}
                                        description={item.description}
                                        quantity={quantity}
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
    { getUserCart, clearErrors, userCheckout, resetCheckout, getOrders }
)(Cart);
