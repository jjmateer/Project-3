import React from "react";
import "./cart.css";

function CartListItem(props) {
    return (
        <div className="grid-item" id="cartCard">
            <div id="card-image-container"><img className="cardImg" alt={props.image} src={props.image} /></div>
            <div id="card-product-info">
                <p className="cproduct">{props.product}</p>
                <p className="cbrand">{props.brand}</p>
                <p className="cprice">${props.price}</p>
                <p className="cdesc">{props.description}</p>
            </div>
        </div>
    )
}

export default CartListItem;