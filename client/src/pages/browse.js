import React, { Component } from "react";
import ProductList from "../components/productlist";
import ProductListItem from "../components/productListItem";
import { connect } from "react-redux";
import { getItems } from "../actions/productActions";
import { clearErrors } from "../actions/errorActions";
import PropTypes from "prop-types";


class Browse extends Component {
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
        return (
            <div>
{this.props.isAuthenticated ? <h1 className="login-style">Welcome!</h1> : <h1 className="notlogin-style">User not logged in</h1>}
                <h1>Browse</h1>
                <ProductList>
                    {items.map(({ _id, image, product, brand, price, description }) => (
                        <ProductListItem
                            key={_id}
                            image={image}
                            product={product}
                            brand={brand}
                            price={price}
                            description={description}
                        />
                    ))}
                </ProductList>
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
)(Browse);
