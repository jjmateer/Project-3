import React from "react";
import "./style.css";

function ProductListItem(props) {
    return (
        <div className="grid-item" id="productCard">
            <p>{props.product}</p>
            <p>{props.brand}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <img id="cardImg" alt={props.image} src={props.image} ></img>
        </div>
    )
}

export default ProductListItem;