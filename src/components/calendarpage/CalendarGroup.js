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

        <div className="buttons">

        <button className="cal-btn fill-button" onClick={this.props.onBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
          </svg>
            </button>

        <button className="cal-btn fill-button" onClick={this.props.onRedo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
</svg>
            </button>


            </div>
        </div>
    
    );
  }
}

export default CalendarGroup;