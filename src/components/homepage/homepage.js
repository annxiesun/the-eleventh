import React, { Component } from 'react';
import "../../resources/global.css"
import "./homepage.css"
import FadeIn from 'react-fade-in';

class Homepage extends React.Component {
  constructor() {
    super();
  }


  render() {
    //<img className="image-logo-main" src={"/assets/text_logo.png"}/>
    return (
      <FadeIn>
        <div class="layout">
          
          <div>
            <div className="collage pic1">
              <img className="girl" src={"/assets/calendar-mockup1.png"} />
            </div>

            <div className="collage pic2">
              <img className="city" src={"/assets/calendar-mockup2.png"} />
            </div>
            <div>
              <div class="ro-title">
              <div class="skew-title">
                <div id="the">the</div>
                <div id="eleventh">eleventh</div>
              </div>
              </div>
            </div>
          </div>

          <div className="home-block">
            <div class="subt-text">NOVEL & UNIQUE CALENDARS</div>
            <div class="desc-text">Turn your calendars into wall-art that speaks to you. New customizable hand-drawn designs for every month.
Each sheet is printed on 12 x 13 65lb canvas paper, with the highest quality of ink.</div>
            <button id="subscribe" className="fill-button create-btn">
              SUBSCRIBE
                </button>
            <div class="btn-row">
              <button onClick={this.props.onClick} className="fill-button create-btn">
                CREATE DEMO
                </button>

              <button onClick={this.props.onClick} className="fill-button create-btn">
                FIND BIRTH DAY
                </button>
            </div>
          </div>
        </div>
      </FadeIn>

    );
  }
}

export default Homepage;