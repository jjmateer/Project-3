import React, { Component } from "react";
import Slider from "react-slick";
import "./merchandise-slide.css";
import { connect } from "react-redux";
import { getItems } from "../../../actions/productActions";
import { clearErrors } from "../../../actions/errorActions";
import PropTypes from "prop-types";

class Merchandise extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    render() {
        const { items } = this.props.item;
        const merchandiseitems = items.filter((item) => {
            return item.category = "accessories"
        })

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
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
            <div>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {merchandiseitems.map(({ _id, image, product, brand, price, description }) => {
                        return (
                            <div className="menu-item" key={_id}>
                                <h4>{product}</h4>
                                <img className="slideImg" src={image} alt={image}></img>
                                <p id="brand">{brand}</p>
                                <p id="price">${price}.00</p>
                                <button id="viewItem">**BUTTON**</button>
                            </div>
                        )
                    })}
                </Slider>
                <div style={{ textAlign: "center" }}>
                    <button className="button" onClick={this.play}>
                        Play
          </button>
                    <button className="button" onClick={this.pause}>
                        Pause
          </button>
                </div>
            </div>
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
)(Merchandise);