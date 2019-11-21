import React from "react";
import "./cart-summary.css";

function CartPrice(props) {
    return (
        <li id="item-price">{props.price}</li>
    );
}

export default CartPrice;