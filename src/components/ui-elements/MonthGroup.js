import React, { Component } from 'react';
import "./ui.css"
import MonthBox from "./MonthBox"
import "../../resources/global.css"

class MonthGroup extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let block = []
        for (let i = 0; i < 12; i++) {
            
            block.push(<MonthBox isChecked={this.props.months[i].isChecked}
                value={i} month={this.props.months[i].month} 
                checkMonth={this.props.checkMonth}/>)
        }

        return (
            <span className="options-block">
                {block}
            </span>
        );
    }
}

export default MonthGroup;