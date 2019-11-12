import React, { Component } from "react";
import "./style.css";
import "../style.css";
import $ from "jquery";


var cntWd, sldWd, tb;

class Picturesglider extends Component {

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
            <div>
                <div className="gliderdiv">

                    <div id="picturesglider">
                        <div id="thumbs">
                            <a id="cataegory-computers1" href="/" className="glide-box">1</a>
                            <a id="cataegory-computers2" href="/" className="glide-box">2</a>
                            <a id="cataegory-computers3" href="/" className="glide-box">3</a>
                            <a id="cataegory-computers4" href="/" className="glide-box">4</a>
                            <a id="cataegory-computers5" href="/" className="glide-box">5</a>
                            <a id="cataegory-computers6" href="/" className="glide-box">6</a>
                            <a id="cataegory-computers7" href="/" className="glide-box">7</a>
                            <a id="cataegory-computers8" href="/" className="glide-box">8</a>
                            <a id="cataegory-computers9" href="/" className="glide-box">9</a>
                            <a id="cataegory-computers10" href="/" className="glide-box">10</a>
                            <a id="cataegory-computers11" href="/" className="glide-box">11</a>
                            <a id="cataegory-computers12" href="/" className="glide-box">12</a>
                            <a id="cataegory-computers13" href="/" className="glide-box">13</a>
                            <a id="cataegory-computers14" href="/" className="glide-box">14</a>
                            <a id="cataegory-computers15" href="/" className="glide-box">15</a>
                            <a id="cataegory-computers16" href="/" className="glide-box">16</a>
                            <a id="cataegory-computers17" href="/" className="glide-box">17</a>
                            <a id="cataegory-computers18" href="/" className="glide-box">18</a>
                            <a id="cataegory-computers19" href="/" className="glide-box">19</a>
                            <a id="cataegory-computers20" href="/" className="glide-box">20</a>

                        </div>
                    </div>
                </div>
            </div>

        );


    }
}
export default Picturesglider;