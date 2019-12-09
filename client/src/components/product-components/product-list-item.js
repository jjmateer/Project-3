import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

const ProductListItem = (props) => {
    return (
        <div className="grid-item" id="productCard">
            <img className="cardImg" alt={props.image} src={props.image} />
            <div id="card-product-info">
                <p className="cproduct">{props.product}</p>
                <p className="cbrand">Brand: {props.brand}</p>
                <p className="cprice">${props.price}</p>
                <Link to="/view-item" className="viewItemPL" id={props.id} onClick={props.viewItem} >View</Link>
            </div>
        </div>
    )
}

export default ProductListItem;