import React, { Component } from "react";
import CartList from "../components/cart";
import CartListItem from "../components/cartItem";
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import { getUserCart } from "../actions/productActions";
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
        this.props.getUserCart();
    }
    render() {
        const  user_cart  = this.props.item.user_cart;
        return (
            <div>
                {this.props.isAuthenticated ? <h1 className="login-style">Welcome!</h1> : <h1 className="notlogin-style">   User not logged in</h1>}
                <h1 className="page-title">Cart</h1>
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
    user_cart: state.user_cart,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.error
})

export default connect(
    mapStateToProps,
    { getUserCart, clearErrors }
)(Cart);

