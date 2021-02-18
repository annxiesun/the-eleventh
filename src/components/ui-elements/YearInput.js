import React, { Component } from 'react';
import "./ui.css"
import "../../resources/global.css"

class YearInput extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
            <input className="year input-box" onChange={this.props.setYear}/>
            </div>
        );
    }
}

export default YearInput;