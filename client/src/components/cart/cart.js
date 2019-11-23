import React from "react";
import "./cart.css";

function CartList(props) {
    return (
        <div id="cartList">
            {props.children}
        </div>
    );
}

export default CartList;