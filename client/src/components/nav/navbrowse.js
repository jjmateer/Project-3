import React from "react";
import Logout from "../logout"
import "./navstyle.css";


function Nav() {
    return (
        <div className="global-header">
            <div className="global-header-left">
                <h1>StoreFront</h1>
            </div>

            <div className="global-header-right">
                <a href="/home">Home</a>
                <a href="/login">Log In</a>
                <a href="/signup">Sign Up</a>
<<<<<<< HEAD
                <a href="/cart">Cart
                {/* <img class="cart-icon" src="cart.gif" alt="CartImg" width="10" height="10" /> */}
                </a>
                <Logout/>
=======
                <a href="/browse">Browse</a>
                <a href="/cart">Cart </a>
>>>>>>> 31431ef5d993977fcba815f7d7d7ca5c82987c8d
            </div>

        </div>
    )
}

export default Nav;