import React from "react";
import "./product-list-item.css";

function ProductListItem(props) {
    return (
        <div className="grid-item" id="productCard">
            <div id="cproduct">{props.product}</div>
            <div id="cbrand">Brand: {props.brand}</div>
            <div id="cprice">${props.price}</div>
            <div id="cdesc">{props.description}</div>
            <img id="cardImg" alt={props.image} src={props.image} />
            {props.authenticated ? <button className="ATCbtn" id={props.id} onClick={props.addItemToCart} >Add To Cart</button>
                : null}
        </div>
    )
}

export default ProductListItem;