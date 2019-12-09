import React from "react";
import { Link } from "react-router-dom";
import "./tiles.css"
export default function HomeTiles(props) {
    return (
        <div className="masonry-item">
            <div className="masonry-content">
                <div className="masonry-image-wrap">
                <img src={props.image} alt={props.image} />
                </div>
                <p>{props.item}</p>
                <p>${props.price}.00</p>
                <div className="view-tile"><Link to="/view-item" className="viewItem" id={props.id} onClick={props.viewItem} >View</Link></div>
            </div>
        </div>
    )
}