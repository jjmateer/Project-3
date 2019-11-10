import React, { Component } from "react";
import "./picturesglider.css";
import $ from "jquery";


var cntWd, sldWd, tb;


class Picturesglider extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {

        $(function () {

            cntWd = $('#container-discount2').innerWidth();
            tb = $('#thumbs');
            sldWd = tb.outerWidth();

            $('#container-discount2').mousemove(function (e) {
                tb.css({ left: ((cntWd - sldWd) * ((e.pageX / cntWd).toFixed(3))).toFixed(1) + "px" });
            });
        });

    }
    render() {
        return (
            <div class="glidediv">
                <h1>test scroller</h1>
                
                <div id="container-discount2">
                    <div id="thumbs">
                        <div class="glide-box"><a id="cataegory1">1</a></div>
                        <div class="glide-box">2</div>
                        <div class="glide-box">3</div>
                        <div class="glide-box">4</div>
                        <div class="glide-box">5</div>
                        <div class="glide-box">6</div>
                        <div class="glide-box">7</div>
                        <div class="glide-box">8</div>
                        <div class="glide-box">9</div>
                        <div class="glide-box">10</div>
                        <div class="glide-box">11</div>
                        <div class="glide-box">12</div>
                        <div class="glide-box">13</div>
                        <div class="glide-box">14</div>
                        <div class="glide-box">15</div>
                    </div>
                </div>
            </div>
        );


    }
}
export default Picturesglider;