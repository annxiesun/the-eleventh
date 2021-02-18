import React, { Component } from 'react';
import Calendar from "./calendar"

class CalendarGroup extends React.Component {
  constructor() {
	super();
   }


  render() {
    let calendars = [];
    for (let i = 0; i < this.props.months.length; i++) {
      if (this.props.months[i].isChecked) {
        calendars.push(
        <Calendar year={this.props.year} month={i} 
        month_name={this.props.months[i].month} />
        )
      }
    }
    return (
        <div>
        {calendars}
        </div>
    
    );
  }
}

export default CalendarGroup;