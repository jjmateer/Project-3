import React from "react";
import "../style.css";


function Search() {

    return (
        <div className="homelayout">
            {/* *************************************** */}

            <div className="bgimg-1">
                <div className="titleArea emboss">
                    <h1 id="homeh1">Technologies of The Future</h1>
                    <h2 id="homeh2">Your Ideas Made Real</h2>
                </div>
            </div>

            <div className="Osearch-container">
                <input type="text" className="Osearch " placeholder="Search.." />


                {/* Dropdown for Categories */}
                <div className="dropdown">
                    <button className="dropbtn">Categories</button>
                    <div className="dropdown-content">
                        <a href="/">Monitors</a>
                        <a href="/">Desktops</a>
                        <a href="/">Laptops</a>
                        <a href="/">Speakers</a>
                        <a href="/">Routers</a>
                        <a href="/">Phones</a>
                        <a href="/">Accessories</a>
                    </div>
                </div>
                <button id="Obutton"  ><i className="fa fa-search"></i> </button>
            </div>
                    {/* <!-- bgimg-1 --> */}


                    {/* ***************************************** */}
        </div>
                )
            }
            
export default Search;