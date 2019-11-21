import React from "react";
import "./cart-summary.css";

function CartSummary(props) {
    return (
        <div>
            <div id="cartSummary">
                <ul id="price-list">{props.children}</ul>
            </div>
        </div>
    );
}

export default CartSummary;