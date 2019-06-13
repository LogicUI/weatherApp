import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledMain } from '../styled/StyledMain';
import React, { Component } from 'react';
import '../scss/main.scss';

export class Main extends Component {
  _renderData = () => {
    const { icon, text } = this.props.current.condition;
    const { temp_c, temp_f } = this.props.current.avgtemp;

    return (
      <React.Fragment>
        <img src={icon} alt="this is a weather icon" />
        <h1 className="is-size-4">{text}</h1>
        <section>
          <h1 className="is-size-4">{temp_c}c</h1>
          <h1 className="is-size-4"> {temp_f}f</h1>
        </section>
      </React.Fragment>
    );
  };

  /**
   * checks if props data is updated to api values returns the render data else return a loading spinner
   */
  loadStatus = () => {
    const isLoaded = !!this.props.current; // ensures data is loaded
    if (isLoaded) {  
      return this._renderData();
    } else {
      return <CircularProgress />;
    }
  };

  render() {
    return <section className="main">{this.loadStatus()}</section>;
  }
}

export default Main;
