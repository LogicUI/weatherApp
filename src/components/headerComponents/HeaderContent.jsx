import React, { Component } from 'react';
import Clock from './Clock.jsx';
import Country from './Country.jsx';
import CurrentDate from './CurrentDate.jsx';

export class HeaderContent extends Component {
  renderHeaderData() {
    return (
      <React.Fragment>
        <Country country={this.props.country} />
        <CurrentDate />
        <Clock />
      </React.Fragment>
    );
  }

  render() {
    return <React.Fragment>{this.renderHeaderData()}</React.Fragment>;
  }
}

export default HeaderContent;

