import React from "react";
import "./style.css";

function HomeDiscountItem(props) {
    return (
        <div>
            <div>{props.product}</div>
            <div>Brand: {props.brand}</div>
            <div>${props.price}</div>
            {/* <div id="cdesc">{props.description}</div> */}
            <img alt={props.image} src={props.image} />
            <button>Add To Cart</button>
        </div>
    )
}

export default HomeDiscountItem;