import React from "react";
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
                <a href="/browse">Browse</a>
                <a href="/cart">Cart </a>
            </div>

        </div>
    )
}

export default Nav;