import React from "react";
import "./style.css";
import ProductsInCart from "../cartItem/index";


function Cart() {
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

export default Cart;