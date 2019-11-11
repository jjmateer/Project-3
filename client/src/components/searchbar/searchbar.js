import React, { Component } from "react";
import "./searchbar.css";
import $ from "jquery";

class SearchBar extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {


        $('.search-button').click(function () {
            $(this).parent().toggleClass('open');
        });

    }

    render() {

        return (
            <div className="search-container">
                <div className="search">
                    <input type="search" class="search-box" />
                    <span className="search-button">
                        <span className="search-icon"></span>
                    </span>
                </div>
            </div>
        );


    }
}

export default SearchBar;