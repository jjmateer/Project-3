import React from "react";
import "./navstyle.css";

function Nav() {
    return (
        <div className="global-header">
            <div className="global-header-left">
                <h1>StoreFront</h1>
            </div>

            <div className="global-header-right">
                <a href="/login">Log In</a>
                <a href="/signup">Sign Up</a>
                <a href="/browse">Browse</a>
                <a href="/cart">Cart
                {/* <img class="cart-icon" src="cart.gif" alt="CartImg" width="10" height="10" /> */}
                </a>
            </div>


        </div>
    )
}

export default Nav;