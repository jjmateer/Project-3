import React from "react";
import "./product.css";

function ProductList(props) {
    return (
        <div id="productList">
            {props.children}
        </div>
    );
}

export default ProductList;