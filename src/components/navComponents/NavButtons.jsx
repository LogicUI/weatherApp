// import React from 'react';
import Calendar from '../../helpers/Calendar';
import "../../scss/generalized.scss";
import React, { Component } from 'react'


export class NavButtons extends Component {

  handleOnClick = () => {
    this.props.handleNavButton(this.props.foreCastDay);
  }


  render() {
    return (
      <section className="flex-middle" onClick={this.handleOnClick}>
        <img src={this.props.foreCastDay.condition.icon} alt="shows the weather"/>
        <h1>{this.props.foreCastDay.day}</h1>
      </section>
    )
  }
}

export default NavButtons


