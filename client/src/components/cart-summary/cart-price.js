import React from "react";
import "./cart-summary.css";

function CartPrice(props) {
    return (
        <li id="itemNP">
            <p>{props.item}</p>
            <p>${props.price}.00</p>
        </li>
    );
}

export default CartPrice;