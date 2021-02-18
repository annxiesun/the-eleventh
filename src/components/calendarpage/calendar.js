import React, { Component } from 'react';
import Day from "./day"
import DayHeader from "./day_header"
import "../../resources/global.css"
import ScrollAnimation from 'react-animate-on-scroll';

const base_year = 1589;

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }

    total_days(y, m) {
        if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || 
            m == 10 || m == 12) {
          return 31;
      
        } else if (m == 2) {
      
          if (y % 400 == 0 || (y % 100 != 0 && y % 4 == 0)) {
            return 29;
      
          } else {
            return 28;
          }
        } else {
          return 30;
        }
    }

    day_of_the_week(year, month, day) {
        let total_days = 0;

        for (let i = base_year; i <= year; i++) {

            for (let j = 1; j <= 12 ; j++) {
                if (j == month && i == year) {
                    break;
                }
                total_days += this.total_days(i, j);

            }

        }
        return (total_days + day - 1) % 7;
    }

    makeCalendar(year, month) {
        
        let day = 0;
        let block = 0;
        let total_days = this.total_days(year, month);
        let start_day = this.day_of_the_week(year, month, 1);

        let calendar = []
        let row = [];
        while (total_days > 1) {
            if (block < start_day && day == 0) {
                row.push(<Day day={""} isOrdial={true} indicator={""}/>)

            } else {
                day += 1;
                row.push(<Day day={day} isOrdial={true} indicator={"th"}/>)
                total_days -= 1;
            }

            block = (block + 1) % 7;
            if (block == 0) {
                calendar.push(<div className="row">{row}</div>);
                row = [];
                
            }
            
        }
        block += 1;
        row.push(<Day day={day + 1} isOrdial={true} indicator={"th"}/>)
        for (let i = block; i < 7; i++) {
            row.push(<Day day={""} isOrdial={true} indicator={""}/>)
        }
        calendar.push(<div>{row}</div>);
        return calendar;
    }
    render() {
/* <ScrollAnimation className="anim"
            animateIn='fadeIn'>*/
        let calendar = this.makeCalendar(this.props.year, this.props.month+1);
        return (
            
           
            <div className="cal-print">
            <div>
                <div className="cal-title">
            {this.props.month_name} {this.props.year}
            </div>

            <div className="calendar-block">
                
            <DayHeader/>
                {calendar}
            </div>
            </div>
            </div>
      
           
        );
    }
}

export default Calendar;