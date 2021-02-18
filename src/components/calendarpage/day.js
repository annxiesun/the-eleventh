import React, { Component } from 'react';
import "./day.css"
import "../../resources/global.css"

class Day extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <span className="day-block">
                <div className="number-block">
                    <span className="date">
                        {this.props.day}
                    </span>
                    <span className={(this.props.isOrdial) ?
                    "ordial hidden" : "ordial show"}>
                        {this.props.indicator}
                    </span>
                </div>

            </span>
        );
    }
}

export default Day;