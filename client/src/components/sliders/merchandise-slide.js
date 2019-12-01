import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./slider.css";
import { connect } from "react-redux";
import { getItems, addToCart } from "../../actions/productActions";
import { clearErrors } from "../../actions/errorActions";
import PropTypes from "prop-types";

class Merchandise extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        user: PropTypes.object,
        addToCart: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    addItemToCart = event => {
        this.props.addToCart(this.props.user._id, event.target.id)
        alert("Item added to cart.")
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
            slidesToShow: 7,
            slidesToScroll: 1,
            draggable: false,
            autoplay: true,
            autoplaySpeed: 5000,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
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
                    {merchandiseitems.map(({ _id, image, item, brand, price }) => {
                        return (
                            <div className="menu-item" key={_id}>
                                <div className="img-background">
                                    <img className="slideImg" src={image} alt={image}></img>
                                </div>
                                <div className="card-info">
                                    <p id="card-header">{item}</p>
                                    <p id="brand">By {brand}</p>
                                    <p id="price">${price}.00</p>
                                    {this.props.isAuthenticated ? <button className="viewItem" id={_id} onClick={this.addItemToCart} >Add To Cart</button>
                                        :
                                        <Link to="/login" className="viewItem">Add to cart</Link>}
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.error,
})

export default connect(
    mapStateToProps,
    { getItems, addToCart, clearErrors }
)(Merchandise);