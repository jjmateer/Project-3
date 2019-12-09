import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./slider.css";
import { connect } from "react-redux";
import { getItems, viewItem } from "../../actions/productActions";
import { clearErrors } from "../../actions/errorActions";
import LoadIcon from "../loader/loader";
import PropTypes from "prop-types";

class Homediscount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: null
        };
    }
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        user: PropTypes.object,
        viewItem: PropTypes.func,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    componentDidMount() {
        this.props.getItems();
    }
    getDropdownValue = event => {
        this.setState({ quantity: event.target.value })
    }
    viewItem = event => {
        this.props.viewItem(event.target.id);
    }
    render() {
        const { items } = this.props.item;
        const featureditems = items.filter((item) => {
            return item.price > 500;
        })
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 2,
            draggable: false,
            autoplay: true,
            autoplaySpeed: 3000,
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
            <Slider {...settings}>
                {featureditems.map(({ _id, image, item, brand, price }) => {
                    return (
                        this.props.item.loading ? <h1 key={_id} className="page-title"><LoadIcon /></h1> : 
                        <div className="menu-item" key={_id}>
                            <div className="img-background">
                                <img className="slideImg" src={image} alt={image}></img>
                            </div>
                            <div className="card-info">
                                <p id="card-header">{item}</p>
                                {/* <p id="brand">By {brand}</p> */}
                                <p id="price">${price}.00</p>
                                <Link to="/view-item" className="viewItem" id={_id} onClick={this.viewItem} >View</Link>
                            </div>
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
    user: state.auth.user,
    error: state.error,
})

export default connect(
    mapStateToProps,
    { getItems, viewItem, clearErrors }
)(Homediscount);