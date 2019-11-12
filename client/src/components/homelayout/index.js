import React from "react";
import "./style.css";
import Picturesglider from "./picturesglider/picturesglider";
import Homediscount from "./homediscount/index";


// import SearchBar from "../searchbar/searchbar"



function Homelayout() {

    return (
        <div className="homelayout">
            {/* *************************************** */}

            <div className="bgimg-1">
                <div className="titleArea emboss">
                    <h1 id="homeh1">Technologies of The Future</h1>
                    <h2 id="homeh2">Your Ideas Made Real</h2>
                </div>
            </div>



            {/* Temporary searchbar */}
            <div className="Osearch-container">
                <input type="text" className="Osearch" placeholder="Search.." /><i class="fa fa-search"></i>


                {/* Dropdown for Categories */}
                <div class="dropdown">
                    <button class="dropbtn">Categories</button>
                    <div class="dropdown-content">
                        <a href="#">Monitors</a>
                        <a href="#">Desktops</a>
                        <a href="#">Laptops</a>
                        <a href="#">Speakers</a>
                        <a href="#">Routers</a>
                        <a href="#">Phones</a>
                        <a href="#">Accessories</a>
                    </div>
                </div>

                <input className="Obutton" type="button" value="Search" />

            </div>




            {/* <!-- bgimg-1 --> */}
            <div>
                <h1 style={{ marginLeft: "800px" }}>Best Deal in Store</h1>

                <Homediscount />
            </div>

            <div>
                <h1 style={{ marginLeft: "80px", marginBottom: "-10px" }}>Monitors</h1>
                <Picturesglider />
            </div>
            {/* ***************************************** */}

        </div>
    )
}

export default Homelayout;