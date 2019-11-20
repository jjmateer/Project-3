import React from "react";
import "./cartItem.css";

function CartListItem(props) {
    return (
        <div className="grid-item" id="productCard">
            <div id="cproduct">{props.product}</div>
            <div id="cbrand">Brand: {props.brand}</div>
            <div id="cprice">${props.price}</div>
            <div id="cdesc">{props.description}</div>
            <img id="cardImg" alt={props.image} src={props.image} />
        </div>
    )
}

export default CartListItem;