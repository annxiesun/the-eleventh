import React, { Component } from 'react';
import Calendar from './components/calendar';
import Options from './components/options';

let month_names = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toCalendar = this.toCalendar.bind(this);
    this.setYear = this.setYear.bind(this);
    this.checkMonth = this.checkMonth.bind(this);

    this.valid_year = this.valid_year.bind(this)
    let m = []

    for (let i = 0; i < 12; i++) {
      m.push({ month: month_names[i], isChecked: false });
    }

    this.state = {
      block: <Options toCalendar={this.toCalendar} checkMonth={this.checkMonth} months={m}
        setYear={this.setYear} />,
      year: 0,
      validYear: false,
      months: m
    }

  }


  valid_year(year) {
    if (year < 1589 || year > 2999) {
      return false;
    }
    return true;
  }

  checkMonth(e) {
    let m = this.state.months;
    if (m[e.target.value].isChecked) {
      m[e.target.value].isChecked = false;
    } else {
      m[e.target.value].isChecked = true;
    }
    this.setState({
      months: m, block: <Options toCalendar={this.toCalendar} checkMonth={this.checkMonth} months={m}
        setYear={this.setYear} valid_year={this.state.validYear}/>
    })

  }

  toCalendar() {
    if (this.valid_year(this.state.year)) {
      let calendars = [];
      for (let i = 0; i < this.state.months.length; i++) {
        if (this.state.months[i].isChecked) {
          calendars.push(<Calendar year={this.state.year}
            month={i} />)
        }
      }
      this.setState({ block: calendars })
    }
  }

  setYear(e) {
    console.log(this.valid_year(e.target.value));
    this.setState({ year: e.target.value,
    validYear: this.valid_year(e.target.value) });
  }

  render() {
    return (
      <span>
        <Calendar year={2002} month={2}/>
      </span>
    );
  }
}

export default App;