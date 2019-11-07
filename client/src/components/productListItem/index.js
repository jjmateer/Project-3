import React from "react";
import "./style.css";

function ProductListItem(props) {
    return (
        <li>
            <p>{props.product}</p>
            <p>{props.brand}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>

        </li>
    )
}

export default ProductListItem;