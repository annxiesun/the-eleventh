import React, { Component } from 'react';
import "./day.css"
import "../resources/font.css"

class Day extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="header-block">
                <span class="day-header">MON</span>
                <span class="day-header">TUE</span>
                <span class="day-header">WED</span>
                <span class="day-header">THU</span>
                <span class="day-header">FRI</span>
                <span class="day-header">SAT</span>
                <span class="day-header">SUN</span>
            </div>
        );
    }
}

export default Day;