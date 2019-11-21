import React, { Component } from "react";
import CartList from "../components/cart/cart";
import CartListItem from "../components/cartItem/cartItem";
import CartSummary from "../components/cart-summary/cart-summary";
import CartPrice from "../components/cart-summary/cart-price";
import CartTotal from "../components/cart-summary/cart-total";
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import { getUserCart } from "../actions/productActions";
import { userCheckout } from "../actions/productActions";
import PropTypes from "prop-types";
class Cart extends Component {
    state = {
        msg: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        getUserCart: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    componentDidMount() {
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
});

export default connect(
  mapStateToProps,
  { getUserCart, clearErrors }
)(Cart);
