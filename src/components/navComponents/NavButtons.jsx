import "../../scss/generalized.scss";
import React, { Component } from 'react'

/**
 * let each navbutton be clickable for the user to get more info from the current forecasted data
 */
export class NavButtons extends Component {
  /**
   * returns the forecast for the currentday if the user clicks on the nav button 
   */
  handleOnClick = () => {
    this.props.handleNavButton(this.props.foreCastDay);
  }

  render() {
    return (
      <section className="flex-middle" onClick={this.handleOnClick}>
        <img src={this.props.foreCastDay.condition.icon} alt="shows the weather"/>
        <h1 className="is-size-4">{this.props.foreCastDay.day}</h1>
      </section>
    )
  }
}

export default NavButtons


