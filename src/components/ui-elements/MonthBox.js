import React, { Component } from 'react';
import "./ui.css"
import "../../resources/global.css"

class MonthBox extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <button className={(this.props.isChecked) ?
                "fill-button checked" : "fill-button empty"}
                onClick={this.props.checkMonth}
                value={this.props.value}>
                {this.props.month}

            </button>
        );
    }
}

export default MonthBox;