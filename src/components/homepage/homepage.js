import React, { Component } from 'react';
import "../../resources/global.css"
import "./homepage.css"
import FadeIn from 'react-fade-in';

class Homepage extends React.Component {
  constructor() {
	super();
   }
   

  render() {
    return (
        <FadeIn>
        <div>
             <img className="image-logo-icon" src={"/assets/icon_logo.png"}/>

        <div className="home-block">
            <img className="image-logo-main" src={"/assets/text_logo.png"}/>
            <button onClick={this.props.onClick} className="fill-button create-btn">
                CREATE CALENDAR
                </button>
            </div>
            </div>
            </FadeIn>
    
    );
  }
}

export default Homepage;