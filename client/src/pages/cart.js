import React from "react";
import Nav from "../components/nav/navcart"
import Cartlayout from "../components/cart/cartlayout"
function Cart() {
    return (
        <div>
            <Nav />
            <h1 className="page-title">Cart</h1>

            <Cartlayout />
            
        </div>
    );
}

export default Cart;
