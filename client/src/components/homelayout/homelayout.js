import React from "react";
import "./homelayout.css";


function Homelayout() {

    var styleh2 = {
        marginLeft: '100px',
        color: "#C8CACC"
    };
    var styleh1 = {
        marginLeft: '100px',
    };

    return (
        <div className="homelayout">
            {/* *************************************** */}

            <div className="bgimg-1">
                <div className="titleArea emboss">
                    <h1 style={styleh1}>Technologies of The Future</h1>
                    <h2 style={styleh2}>Your Ideas Made Real</h2>
                </div>
            </div>
            {/* <!-- bgimg-1 --> */}


            {/* ***************************************** */}
        </div>
    )
}

export default Homelayout;