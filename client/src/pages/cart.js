import React, { Component } from "react";
import CartList from "../components/cart/cart";
import CartListItem from "../components/cartItem/cartItem";
import CartSummary from "../components/cart-summary/cart-summary";
// import CartPrice from "../components/cart-summary/cart-price";
import CartTotal from "../components/cart-summary/cart-total";
import { connect } from "react-redux";
import LoadIcon from "../components/loader/loader";
import { clearErrors } from "../actions/errorActions";
import { getUserCart, userCheckout } from "../actions/productActions";
import PropTypes from "prop-types";
// import AwesomeComponent from "../components/loader/loader"
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
        this.props.getUserCart(this.props.user.id);
    }

    checkoutRequest = event => {
        this.props.userCheckout(event.target.id)
        alert("Thank you for shopping with us.")
        // this.props.getUserCart(this.props.user.id)
    }
    render() {
        const user_cart = this.props.item.user_cart;
        return (
            <div>
                {user_cart.length ? <h1 className="page-title">Cart</h1> :
                    <h1 className="page-title">{this.props.item.loading ? "Loading..." : "Cart is empty"}</h1>}
                {this.props.item.loading ? <h1 className="page-title"><LoadIcon /></h1> :
                    <div>
                        {user_cart.length ?
                            <CartSummary>
                                <CartTotal
                                    user_cart={user_cart}
                                />
                                <button className="checkoutBtn" id={this.props.user.id} onClick={this.checkoutRequest}>Check Out</button>
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
    item: state.item,
    user: state.auth.user,
    error: state.error
})

export default connect(
    mapStateToProps,
    { getUserCart, clearErrors, userCheckout }
)(Cart);

///
