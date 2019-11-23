import React from "react";
import "./cart-summary.css";

function CartPrice(props) {
    return (
        <li id="itemNP">
            <p className="itemNP-item">{props.item}</p>
            <p className="itemNP-price">${props.price}.00</p>
        </li>
    );
}

export default CartPrice;