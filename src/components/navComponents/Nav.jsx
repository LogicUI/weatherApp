import NavButtons from './NavButtons.jsx';
import shortid from 'shortid';
import '../../scss/nav.scss';
import React, { Component } from 'react';


/**
 * displays the nav on the side showing the forecasted data , the user is able to get more info
 * from the navbutton they clicked on 
 */
export class Nav extends Component {



  /**
   * render each nav buttons for the forecasted weather
   * takes the current day and forecasted day
   */
  _renderNavButtons() {
    // create a new array of buttons using today and forecasted weather
    const buttons = [this.props.current, ...this.props.forecast]; 
    if (buttons.length > 1) {
      // check if buttons array is not empty
      return buttons.map((element) => {
        return (

          <NavButtons
            key={shortid.generate()}
            foreCastDay={element}
            handleNavButton={this.props.handleNavButton}
          />


        );
      });
    }
  }

  /**
   * short circuit evaluate if props has been received sucessfully and render the nav buttons
   */
  loadStatus = () => {
    return this.props.forecast && this._renderNavButtons();
  };

  render() {
    return <section className="nav">{this.loadStatus()}</section>;
  }
}

export default Nav;
