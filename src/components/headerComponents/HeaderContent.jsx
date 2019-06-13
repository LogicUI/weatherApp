import React, { Component } from 'react';
import Clock from './Clock.jsx';


export class HeaderContent extends Component {
  renderHeaderData() {
    return (
      <React.Fragment>
        <Clock />
        <h1 className="is-size-5">GeoLocation Weather App</h1>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Search For Country "
          />
        </div>
      </React.Fragment>
    );
  }

  render() {
    return <React.Fragment>{this.renderHeaderData()}</React.Fragment>;
  }
}

export default HeaderContent;
