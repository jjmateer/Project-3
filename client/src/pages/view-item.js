import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/productActions";
import { clearErrors } from "../actions/errorActions";
import { Link } from "react-router-dom";
// import LoadIcon from "../components/loader/loader";
import PropTypes from "prop-types";
import "../components/product-components/view-item.css"


class ViewItem extends Component {
    state = {
        quantity: null,
    };
    static propTypes = {
        user: PropTypes.object,
        addToCart: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        clearErrors: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.clearErrors();
    }
    getDropdownValue = event => {
        this.setState({ quantity: event.target.value })
    }
    addItemToCart = event => {
        this.props.addToCart(this.props.user._id, event.target.id, this.state.quantity);
        alert("Item added to cart.")
    }
    render() {
        const { item_being_viewed } = this.props.item;
        console.log(item_being_viewed[0])
        return (
            <div id="productList">
                {item_being_viewed.map(({ _id, image, item, brand, price, description }) => {
                    return (
                        <div key={_id} >
                            <div id="view-image-container"><img className="cardImg" alt={image} src={image} /></div>
                            < div id="view-product-info">
                                <p className="vproduct">{item}</p>
                                <p className="vbrand">Brand: {brand}</p>
                                <p className="vprice">${price}</p>
                                <p className="vdesc">{description}</p>
                            </div>
                        </div>
                    )
                })}
                <div id="VATCcombine">
                    <select className="Vquantity-dropdown" onClick={this.getDropdownValue}>
                        <option className="quantity-drop-option" value={1}>1</option>
                        <option className="quantity-drop-option" value={2}>2</option>
                        <option className="quantity-drop-option" value={3}>3</option>
                        <option className="quantity-drop-option" value={4}>4</option>
                        <option className="quantity-drop-option" value={5}>5</option>
                    </select>
                    {this.props.isAuthenticated ? <button className="VATCbtn" onClick={this.addItemToCart} >Add To Cart</button>
                        :
                        <Link to="/login" className="ATCbtn">Login to buy items.</Link>}
                </div>
            </div >
        );
    }
}
const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    user: state.auth.user,
    error: state.error,
})

export default connect(
    mapStateToProps,
    { addToCart, clearErrors }
)(ViewItem);
