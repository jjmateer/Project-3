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
                <Link to="/">Home</Link>
                <Link to="/login">Log In</Link>
                <Link to="/browse">Browse</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/cart">Cart </Link>
                <Logout />
            </div>

        </div>
    )
}

export default Nav;