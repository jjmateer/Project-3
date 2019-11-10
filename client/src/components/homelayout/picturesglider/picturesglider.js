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

            cntWd = $('#picturesglider').innerWidth();
            tb = $('#thumbs');
            sldWd = tb.outerWidth();

            $('#picturesglider').mousemove(function (e) {
                tb.css({ left: ((cntWd - sldWd) * ((e.pageX / cntWd).toFixed(3))).toFixed(1) + "px" });
            });
        });

    }
    render() {
        return (
            <div className="gliderdiv">
                <h1>test scroller</h1>

                <div id="picturesglider">
                    <div id="thumbs">
                        <div class="glide-box"><a id="cataegory-computers">1</a></div>
                        <div class="glide-box"><a id="cataegory-computers">2</a></div>
                        <div class="glide-box"><a id="cataegory-computers">3</a></div>
                        <div class="glide-box"><a id="cataegory-computers">4</a></div>
                        <div class="glide-box"><a id="cataegory-computers">5</a></div>
                        <div class="glide-box"><a id="cataegory-computers">6</a></div>
                        <div class="glide-box"><a id="cataegory-computers">7</a></div>
                        <div class="glide-box"><a id="cataegory-computers">8</a></div>
                        <div class="glide-box"><a id="cataegory-computers">9</a></div>
                        <div class="glide-box"><a id="cataegory-computers">10</a></div>
                        <div class="glide-box"><a id="cataegory-computers">12</a></div>
                        <div class="glide-box"><a id="cataegory-computers">13</a></div>
                        <div class="glide-box"><a id="cataegory-computers">14</a></div>
                        <div class="glide-box"><a id="cataegory-computers">15</a></div>
                    </div>
                </div>
            </div>
        );


    }
}
export default Picturesglider;