import React from "react";
import "./cart-summary.css";

var totalArr = [];
var total;
function CartTotal(props) {
    for (let i = 0; i < props.user_cart.length; i++) {
        totalArr.push(parseInt(props.user_cart[i].price))
        if (i === props.user_cart.length - 1) {
            total = totalArr.reduce((a, b) => a + b, 0)
            totalArr = [];
        }
    }
    return (
        <div id="cart-total" >{total}</div>
    );
}

export default CartTotal

