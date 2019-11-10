import React, { Component } from "react";
import "./picturesglider.css";
import $ from 'jquery';

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
            <div >
                <div id="container-discount2">
                    <div id="thumbs">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                        <div>13</div>
                        <div>14</div>
                        <div>15</div>
                    </div>
                </div>
            </div>
        );


    }
}
export default Picturesglider;