import React, { Component } from 'react';
import "./ui.css"
import "../../resources/font.css"

class YearInput extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
            <input className="year input-box" onChange={this.props.setYear}/>
            <span className={(this.props.isValid) ?
                "hide" : "show"}>Please enter valid year</span>
            </div>
        );
    }
}

export default YearInput;