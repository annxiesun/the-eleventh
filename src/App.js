import React, { Component } from 'react';
import CalendarGroup from './components/calendarpage/CalendarGroup';
import Homepage from './components/homepage/homepage';
import Options from './components/options';
import TopBar from './components/ui-elements/TopBar';
import $ from "jquery"
import "./resources/global.css"

let month_names = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  let m_ = []
  
      for (let i = 0; i < 12; i++) {
        m_.push({ month: month_names[i], isChecked: false });
      }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toCalendar = this.toCalendar.bind(this);
    this.toOptions = this.toOptions.bind(this);
    this.toHome = this.toHome.bind(this);

    this.setYear = this.setYear.bind(this);
    this.checkMonth = this.checkMonth.bind(this);

    this.valid_year = this.valid_year.bind(this)
    this.checkChecked = this.checkChecked.bind(this);

    this.onRedo = this.onRedo.bind(this);

    this.checkAll = this.checkAll.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.checkToday = this.checkToday.bind(this);


    this.state = {
      block: 0,
      year: null,
      isValidYear: false,
      months: m_
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
    this.setState({ months: m })
  }

  clearAll(){
    let m= this.state.months
    for (let i = 0; i< 12; i++) {
      m[i].isChecked=false;
    }
    this.setState({months:m, year: null, valid_year:false});
  }

  checkAll(){
    let m= this.state.months
    for (let i = 0; i< 12; i++) {
      m[i].isChecked=true;
    }
    this.setState({months:m});
  }

  checkToday(){
    let today = new Date();

    let m = m_
    m[parseInt(today.toISOString().slice(5,7)) - 1].isChecked = true;

    this.setState({
      year: parseInt(today.toISOString().slice(0,4)),
      months: m,
      valid_year: true
    })

    
  }
  toOptions() {
    $('.transition').fadeOut(500)
    setTimeout(
      () => {
        setTimeout(this.setState({ block: 1 }), 400)
        $('.transition').fadeIn(500)
      }, 500);


  }

  toHome() {
    $('.transition').fadeOut(500)
    setTimeout(
      () => {
        setTimeout(this.setState({ block: 0 }), 400)
        $('.transition').fadeIn(500)
      }, 500);


  }

  toCalendar() {
    if (this.valid_year(this.state.year) && this.checkChecked()) {
      $('.transition').fadeOut(500)
      setTimeout(
        () => {
          setTimeout(this.setState({ block: 2 }), 400)
          $('.transition').fadeIn(500)
        }, 500);
    } else if (!this.valid_year(this.state.year) && !this.checkChecked()) {

      setTimeout(() => {
        setTimeout(
          () => {
            $('.y-text').css("transform", "translateY(0px)")
          }, 200)
        $('.y-text').css("transform", "translateY(-25px)")
      }, 100)
      setTimeout(
        () => {
          $('.m-text').css("transform", "translateY(0px)")
        }, 200)
      $('.m-text').css("transform", "translateY(-25px)")
    }
    else if (!this.valid_year(this.state.year)) {
      setTimeout(
        () => {
          $('.y-text').css("transform", "translateY(0px)")
        }, 200)
      $('.y-text').css("transform", "translateY(-25px)")

    } else if (!this.checkChecked()) {
      setTimeout(
        () => {
          $('.m-text').css("transform", "translateY(0px)")
        }, 200)
      $('.m-text').css("transform", "translateY(-25px)")
    }
  }

  setYear(e) {

    this.setState({
      year: e.target.value,
      isValidYear: this.valid_year(e.target.value)
    });

  }

  onRedo() {
    this.setState({block:1, year: null, months: m_, isValidYear:false})
  }

  checkChecked() {
    for (let i = 0; i < 12; i++) {
      if (this.state.months[i].isChecked) {
        return true;
      }
    }
    return false;
  }
  render() {
    let check = this.checkChecked();

    let block;
    if (this.state.block == 0) {
      block = <Homepage onClick={this.toOptions} page={this.state.block} />
    } else if (this.state.block == 1) {
      block = <Options toCalendar={this.toCalendar} checkMonth={this.checkMonth}
        months={this.state.months}
        year={this.state.year}
        setYear={this.setYear} isValidYear={this.state.isValidYear}
        oneChecked={check} 
        checkAll={this.checkAll}
        checkToday={this.checkToday}
        clearAll={this.clearAll}/>
    } else {
      block = <CalendarGroup months={this.state.months}
        year={this.state.year} onRedo={this.onRedo} onBack={this.toOptions}
       />
    }

    return (
      <div>
        <TopBar toHome={this.toHome} />
        <div className="transition">
          {block}
        </div>
      </div>
    );
  }
}

export default App;