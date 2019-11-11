import React from "react";
import "./style.css";
import Picturesglider from "./picturesglider/picturesglider"
import Homediscount from "./homediscount/index"
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
                <input type="text" className="Osearch" placeholder="Search.." />
                <input className="Obutton" type="button" value="Search" />

            </div>



            {/* <!-- bgimg-1 --> */}
            <div>
                <Homediscount />
            </div>

            <div>
                <Picturesglider />
            </div>
            {/* ***************************************** */}
            <p>lorem</p>

        </div>
    )
}

export default Homelayout;