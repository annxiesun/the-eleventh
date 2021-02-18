import React, { Component } from 'react';
import MonthBox from "./ui-elements/MonthBox"
import MonthGroup from "./ui-elements/MonthGroup"
import YearInput from "./ui-elements/YearInput"
import "../resources/font.css"
import "./options.css"

class Day extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
       

        return (
            <span>
            <span className="">
            
                
                <MonthGroup months={this.props.months} 
                checkMonth={this.props.checkMonth}/>
            </span>
            <YearInput setYear={this.props.setYear} valid ={this.props.validYear}/>
            <button onClick={this.props.toCalendar}/>
            </span>
        );
    }
}

export default Day;