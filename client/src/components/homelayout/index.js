import React from "react";
import "./style.css";
import Picturesglider from "./picturesglider/picturesglider"



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
            {/* <!-- bgimg-1 --> */}

            <Picturesglider />
            {/* ***************************************** */}
        </div>
    )
}

export default Homelayout;