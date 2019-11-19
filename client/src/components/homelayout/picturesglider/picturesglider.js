// import React, { Component } from "react";
// import "./picturesglider.css";
// import $ from "jquery";


// var cntWd, sldWd, tb;

// class Picturesglider extends Component {
//     constructor(props) {
//         super(props)
//     }

//     componentDidMount = () => {

//         $(function () {

//             cntWd = $('#picturesglider').innerWidth();
//             tb = $('#thumbs');
//             sldWd = tb.outerWidth();

//             $('#picturesglider').mousemove(function (e) {
//                 tb.css({ left: ((cntWd - sldWd) * ((e.pageX / cntWd).toFixed(3))).toFixed(1) + "px" });
//             });
//         });

//     }
//     render() {
//         return (
//             <div>
//                 <div className="gliderdiv">

//                     <div id="picturesglider">
//                         <div id="thumbs">
//                             <a id="cataegory-computers1" class="glide-box">1</a>
//                             <a id="cataegory-computers2" class="glide-box">2</a>
//                             <a id="cataegory-computers3" class="glide-box">3</a>
//                             <a id="cataegory-computers4" class="glide-box">4</a>
//                             <a id="cataegory-computers5" class="glide-box">5</a>
//                             <a id="cataegory-computers6" class="glide-box">6</a>
//                             <a id="cataegory-computers7" class="glide-box">7</a>
//                             <a id="cataegory-computers8" class="glide-box">8</a>
//                             <a id="cataegory-computers9" class="glide-box">9</a>
//                             <a id="cataegory-computers10" class="glide-box">10</a>
//                             <a id="cataegory-computers11" class="glide-box">11</a>
//                             <a id="cataegory-computers12" class="glide-box">12</a>
//                             <a id="cataegory-computers13" class="glide-box">13</a>
//                             <a id="cataegory-computers14" class="glide-box">14</a>
//                             <a id="cataegory-computers15" class="glide-box">15</a>
//                             <a id="cataegory-computers16" class="glide-box">16</a>
//                             <a id="cataegory-computers17" class="glide-box">17</a>
//                             <a id="cataegory-computers18" class="glide-box">18</a>
//                             <a id="cataegory-computers19" class="glide-box">19</a>
//                             <a id="cataegory-computers20" class="glide-box">20</a>

//                         </div>
//                     </div>
//                 </div>
//             </div>

//         );


//     }
// }
// export default Picturesglider;