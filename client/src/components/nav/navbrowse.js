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
                <a href="/">Home</a>
                <a href="/login">Log In</a>
                <a href="/signup">Sign Up</a>
                <a href="/browse">Browse</a>
                <a href="/cart">Cart </a>
                <Logout />
            </div>

        </div>
    )
}

export default Nav;