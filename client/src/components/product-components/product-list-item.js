import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

const ProductListItem = (props) => {
    return (
        <div className="grid-item" id="productCard">
            <div id="card-image-container"><img className="cardImg" alt={props.image} src={props.image} /></div>
            <div id="card-product-info">
                <p className="cproduct">{props.product}</p>
                <p className="cbrand">Brand: {props.brand}</p>
                <p className="cprice">${props.price}</p>
            </div>
            <Link to="/view-item" className="viewItemPL" id={props.id} onClick={props.viewItem} >View</Link>
        </div>
    )
}

export default ProductListItem;