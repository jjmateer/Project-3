import React from "react";
import "./style.css";

function ProductList(props) {
    return (
        <div className="Section">
            {props.children}
        </div>
    );
}

export default ProductList;