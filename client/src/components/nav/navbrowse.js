import React from "react";
import { Link } from "react-router-dom";
import Logout from "../logout"
import "./navstyle.css";


function Nav() {
    return (
        <div className="global-header">
            <div className="global-header-left">
                <h1>StoreFront</h1>
            </div>

            <div className="global-header-right">
                <Link href="/">Home</Link>
                <Link href="/login">Log In</Link>
                <Link href="/signup">Sign Up</Link>
                <Link href="/cart">Cart </Link>
                <Logout />
            </div>

        </div>
    )
}

export default Nav;