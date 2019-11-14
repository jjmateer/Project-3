import React, { Component } from "react";
import "./style.css";
import "../style.css";
import $ from "jquery";
import { connect } from "react-redux";
import { getItems } from "../../../actions/productActions";
import { clearErrors } from "../../../actions/errorActions";
import PropTypes from "prop-types";


var cntWd, sldWd, tb;

class Picturesglider extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    componentDidMount = () => {
        this.props.getItems();
        $(function () {

            cntWd = $('#picturesglider').innerWidth();
            tb = $('#thumbs');
            sldWd = tb.outerWidth();

            $('#picturesglider').mousemove(function (e) {
                tb.css({ left: ((cntWd - sldWd) * ((e.pageX / cntWd).toFixed(3))).toFixed(1) + "px" });
            });
        });

    }
    render() {
        const { items } = this.props.item;
        return (
            <div>
                <div className="gliderdiv">

                    <div id="picturesglider">
                        <div id="thumbs">
                            {items.map(({ _id, image, product, brand, price, description }) => (
                                <div className="glide-box" key={_id}>
                                    <h4>{product}</h4>
                                    <p>image:{image}</p>
                                    <p>brand:{brand}</p>
                                    <p>${price}.00</p>
                                </div>
                            ))}

                        </div>
                    </div>
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
)(Picturesglider);