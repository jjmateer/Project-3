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

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <div>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {items.map(({ _id, image, product, brand, price, description }) => {
                        return (
                            <div className="menu-item" key={_id}>
                                <h4>{product}</h4>
                                <p>image:{image}</p>
                                <p>brand:{brand}</p>
                                <p>${price}.00</p>
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