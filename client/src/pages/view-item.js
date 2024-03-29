import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, resetCheckout, getUserCart } from "../actions/transactionActions";
import { clearErrors } from "../actions/errorActions";
import { Link } from "react-router-dom";
import { getOrders } from "../actions/authActions";
import PropTypes from "prop-types";
import "../components/product-components/view-item.css"
import store from "../store";
import jwt_decode from "jwt-decode";

class ViewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };
    };
    static propTypes = {
        user: PropTypes.object,
        addToCart: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        resetCheckout: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        getOrders: PropTypes.func
    }
    componentDidMount() {
        this.props.clearErrors();
        this.props.resetCheckout();
        if (localStorage.getItem("jwtToken")) {
            store.dispatch(getUserCart(jwt_decode(localStorage.getItem("jwtToken")).id));
        }
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
        return (
            <div id="VproductList">
                {item_being_viewed.map(({ _id, image, item, brand, price, description }) => {
                    return (
                        <div key={_id} >
                                <img className="VcardImg" alt={image} src={image} />
                            < div id="Vview-product-info">
                                <p className="vproduct">{item}</p>
                                <p className="vbrand">Brand: {brand}</p>
                                <p className="vprice">${price}.00</p>
                                <p className="vdesc">{description}</p>
                            </div>
                            <div id="VATCcombine">
                                <select className="Vquantity-dropdown" onClick={this.getDropdownValue}>
                                    <option className="quantity-drop-option" value={1}>1</option>
                                    <option className="quantity-drop-option" value={2}>2</option>
                                    <option className="quantity-drop-option" value={3}>3</option>
                                    <option className="quantity-drop-option" value={4}>4</option>
                                    <option className="quantity-drop-option" value={5}>5</option>
                                </select>
                                {this.props.isAuthenticated ? <Link to={'/'} id={_id} className="VATCbtn" onClick={this.addItemToCart} >Add To Cart</Link>
                                    :
                                    <Link to="/login" className="VATCbtn">Add To Cart</Link>}
                            </div>
                        </div>
                    )
                })}
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
    { addToCart, clearErrors, resetCheckout, getOrders }
)(ViewItem);
