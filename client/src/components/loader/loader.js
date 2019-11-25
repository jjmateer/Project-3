import Loader from 'react-loader-spinner'
import React, { Component } from "react";
export default class LoadIcon extends Component {
    //other logic
    render() {
        return (
            <Loader
                type="Bars"
                color="#006e51"
                height={100}
                width={100}

            />
        );
    }
}   