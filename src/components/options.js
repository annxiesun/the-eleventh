import React, { Component } from 'react';
import MonthBox from "./ui-elements/MonthBox"
import MonthGroup from "./ui-elements/MonthGroup"
import YearInput from "./ui-elements/YearInput"
import "./options.css"
import FadeIn from 'react-fade-in';

class Day extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <FadeIn duration={600}>
            <span>
                <span className="">


                    <span className={(this.props.oneChecked) ?
                        "hide" : "show"}>Choose a month</span>

                    <MonthGroup months={this.props.months}
                        checkMonth={this.props.checkMonth} />
                </span>
                <span className={(this.props.isValidYear) ?
                    "hide" : "show"}>Enter valid year</span>
                <YearInput setYear={this.props.setYear} />
                <button className="fill-button next-btn" onClick={this.props.toCalendar}>
                    <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg>
                </button>
            </span>
            </FadeIn>
        );
    }
}

export default Day;