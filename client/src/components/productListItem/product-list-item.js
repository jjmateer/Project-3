import React from "react";
import "./product-list-item.css";
import { Link } from "react-router-dom";

function ProductListItem(props) {
    return (
        <div className="grid-item" id="productCard">
            <div id="card-image-container"><img className="cardImg" alt={props.image} src={props.image} /></div>
            <div id="card-product-info">
            <p className="cproduct">{props.product}</p>
            <p className="cbrand">Brand: {props.brand}</p>
            <p className="cprice">${props.price}</p>
            <p className="cdesc">{props.description}</p>
            </div>
            {props.authenticated ? <button className="ATCbtn" id={props.id} onClick={props.addItemToCart} >Add To Cart</button>
                :
                <Link to="/login" className="ATCbtn">Add to cart</Link>}
        </div>
    )
}

export default ProductListItem;