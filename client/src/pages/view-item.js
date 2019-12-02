import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/productActions";
import { clearErrors } from "../actions/errorActions";
// import LoadIcon from "../components/loader/loader";
import PropTypes from "prop-types";


class ViewItem extends Component {
    state = {
        quantity: null,
        msg: null
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
        this.props.isAuthenticated ?
            this.setState({ authenticated: true })
            :
            this.setState({ authenticated: false })
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
        return (
            <div id="productList">
                <div className="grid-item" id="productCard">
                    <div id="card-image-container"><img className="cardImg" alt={props.image} src={props.image} /></div>
                    <div id="card-product-info">
                        <p className="cproduct">{props.product}</p>
                        <p className="cbrand">Brand: {props.brand}</p>
                        <p className="cprice">${props.price}</p>
                        <p className="cdesc">{props.description}</p>
                    </div>
                    <select className="quantity-dropdown" onClick={props.getDropdownValue}>
                        <option className="quantity-drop-option" value={1}>1</option>
                        <option className="quantity-drop-option" value={2}>2</option>
                        <option className="quantity-drop-option" value={3}>3</option>
                        <option className="quantity-drop-option" value={4}>4</option>
                        <option className="quantity-drop-option" value={5}>5</option>
                    </select>
                    {props.authenticated ? <button className="ATCbtn" id={props.id} onClick={props.addItemToCart} >Add To Cart</button>
                        :
                        <Link to="/login" className="ATCbtn">Add to cart</Link>}
                </div>
            </div>
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
