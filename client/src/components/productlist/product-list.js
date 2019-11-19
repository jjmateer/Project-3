import React from "react";
import "./product-list.css";

function ProductList(props) {
    return (
        <div id="productList">
            {props.children}
        </div>
    );
}

export default ProductList;