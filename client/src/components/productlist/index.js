import React from "react";
import "./style.css";

function ProductList(props) {
    return (
        <div id="productList">
            {props.children}
        </div>
    );
}

export default ProductList;