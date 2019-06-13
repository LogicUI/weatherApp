import CircularProgress from '@material-ui/core/CircularProgress';
import NavButtons from './NavButtons.jsx';
import shortid from 'shortid';
import '../../scss/nav.scss';
import React, { Component } from 'react';

export class Nav extends Component {
  _renderNavButtons() {
    const buttons = [this.props.current, ...this.props.forecast]; // create a new array of buttons for today and forecast weather
    if (buttons.length > 1) {
      // check if all elements are coppie to buttons
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
   * check if the component receieve the prop for forecast render the buttons else load a circular progress
   */
  loadStatus = () => {
    const isloaded = !!this.props.forecast;
    if (isloaded) {
      return this._renderNavButtons();
    } else {
      return <CircularProgress />;
    }
  };

  render() {
    return <section className="nav">{this.loadStatus()}</section>;
  }
}

export default Nav;
