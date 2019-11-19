import React, { Component } from "react";
import Slider from "react-slick";
import "./homediscount.css";
import { connect } from "react-redux";
import { getItems } from "../../../actions/productActions";
import { clearErrors } from "../../../actions/errorActions";
import PropTypes from "prop-types";

class Homediscount extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    componentDidMount() {
        this.props.getItems();
    }
    render() {
        const { items } = this.props.item;
        const lowcostitems = items.filter((item) => {
            return item.price < 100;
        })
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 10,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Slider {...settings}>
                {lowcostitems.map(({ _id, image, product, brand, price, description }) => {
                    return (
                        <div className="menu-item" key={_id}>
                            <h4>{product}</h4>
                            <img className="slideImg" src={image} alt={image}></img>
                            <p id="brand">brand:{brand}</p>
                            <p id="price">${price}.00</p>
                            <button id="viewItem">View</button>
                        </div>
                    )
                })}
                {lowcostitems.map(({ _id, image, product, brand, price, description }) => {
                    return (
                        <div className="menu-item" key={_id}>
                            <h4>{product}</h4>
                            <img className="slideImg" src={image} alt={image}></img>
                            <p id="brand">brand:{brand}</p>
                            <p id="price">${price}.00</p>
                            <button id="viewItem">View</button>
                        </div>
                    )
                })}
            </Slider>
        );
    }
}


const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(
    mapStateToProps,
    { getItems, clearErrors }
)(Homediscount);