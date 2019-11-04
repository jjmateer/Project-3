import React from "react";
import Nav from "../components/nav/navhome";
import Homelayout from "../components/homelayout/homelayout"


function Home() {
    return (

        <div >
            <Nav />
            <h1 className="page-title">Home</h1>
            < Homelayout />
        </div>
    );
}

export default Home;
