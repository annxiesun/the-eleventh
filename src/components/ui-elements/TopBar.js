import React, { Component } from 'react';

class TopBar extends React.Component {
  constructor() {
	super();
   }


  render() {
    return (
<div>
<img className="image-logo-icon" src={"/assets/icon_logo.png"} onClick={this.props.toHome}/>
<span className="links">
<button className="nav-btn">Shop</button>
<button className="nav-btn">About</button>
</span>
    </div>
    );
  }
}

export default TopBar;