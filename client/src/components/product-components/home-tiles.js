import React from "react";
// import { Link } from "react-router-dom";
import "./tiles.css"
export default function HomeTiles(props) {
    return (
        <div className="masonry-item">
            <div className="masonry-content">
                <img src={props.image} alt={props.image} />
                <h3 className="masonry-title">{props.item}</h3>
                <p className="masonry-description">{props.description}</p>
            </div>
        </div>
    )
}