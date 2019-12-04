import React from "react";
import "./cart.css";

var totalArr = [];
var total;
function CartTotal(props) {
    for (let i = 0; i < props.user_cart.length; i++) {
        totalArr.push(parseInt(props.user_cart[i].item.price))
        if (i === props.user_cart.length - 1) {
            total = totalArr.reduce((a, b) => a + b, 0)
            totalArr = [];
        }
    }
    return (

        props.user_cart.length ?
            <div id="cart-total" >Total: ${total}.00</div>
            :
            null


    );
}

export default CartTotal

