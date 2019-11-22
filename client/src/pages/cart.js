import React, { Component } from "react";
import CartList from "../components/cart/cart";
import CartListItem from "../components/cartItem/cartItem";
import CartSummary from "../components/cart-summary/cart-summary";
import CartPrice from "../components/cart-summary/cart-price";
import CartTotal from "../components/cart-summary/cart-total";
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import { getUserCart, userCheckout } from "../actions/productActions";
import PropTypes from "prop-types";
class Cart extends Component {
    state = {
        msg: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired,
        error: PropTypes.object.isRequired,
        getUserCart: PropTypes.func.isRequired,
        userCheckout: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    userCheckout() {
        this.props.userCheckout(this.props.user._id)
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.getUserCart(this.props.user.id);
    }
    render() {
        const user_cart = this.props.item.user_cart;
        return (
            <div>
                <CartSummary>
                    {user_cart.map(({ _id, price, item }) => (
                        <CartPrice
                            key={_id}
                            price={price}
                            item={item}
                        />
                    ))}
                    <CartTotal
                        user_cart={user_cart}
                    />
                    <button className="checkoutBtn" onClick={userCheckout}>Check Out</button>
                </ CartSummary>
                <CartList>
                    {user_cart.map(({ _id, image, item, brand, price, description }) => (
                        <CartListItem
                            key={_id}
                            id={_id}
                            image={image}
                            product={item}
                            brand={brand}
                            price={price}
                            description={description}
                        />
                    ))}
                </CartList>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.error
})

export default connect(
    mapStateToProps,
    { getUserCart, userCheckout, clearErrors }
)(Cart);

