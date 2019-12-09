import React from "react";
import "./cart.css";

function CartListItem(props) {
    const totalUnitPrice = props.price * props.quantity;
    return (
        <div className="grid-item" id="cartCard">
            <img className="cardImg" alt={props.image} src={props.image} />
            <div id="card-product-info">
                <p className="cproduct">{props.product}</p>
                <p className="cbrand">By {props.brand}</p>
                <p className="cdesc">Description: {props.description}</p>
                <p className="cprice">Price: ${props.price}.00</p>
                <p className="cquantity">Quantity: {props.quantity}</p>
                <p className="cquantity">${props.price}.00 X {props.quantity} = ${totalUnitPrice}.00</p>
            </div>
        </div>
    )
}

export default CartListItem;