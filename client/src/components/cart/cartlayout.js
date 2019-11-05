import React from "react";
import "./cartstyle.css";
import ProductsInCart from "./products-in-cart"

function Cartlayout() {
    return (
        <div>

            <div className="content-wrapper">
                <div className="products-organizer">
                    <ProductsInCart />
                </div>
            </div>
        </div>
    )
}

export default Cartlayout;