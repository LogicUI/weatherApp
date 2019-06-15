import React, { Component } from 'react';
import Clock from './Clock.jsx';
import '../../scss/header.scss';
import capitalized from '../../helpers/captializeFirst';

/**
 * displays the time , title and search bar on the headernavbar
 */
class HeaderContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  /**
   * controls the input that the user key on the input to state
   */
  handleOnChange = (event) => {
    this.setState({
      term: event.target.value
    });
  };

  /**
   * submits the input for the name of country the user want to search the data from
   * 
   */
  onFormSubmit = (event) => {
    event.preventDefault(); // prevent refresh of page 
    this.props.search(capitalized(this.state.term));
    this.setState({
      term: ''
    });
  };

  /**
   * renders the input field where the user can search which country to view the weather 
   */
  renderFormInput(){
    return(
      <React.Fragment>
        <form className="control has-icons-right" onSubmit={this.onFormSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Search For Country "
            value={this.state.term}
            onChange={this.handleOnChange}
            data-testid="input-test"
          />
          <span className="icon is-small is-right">
            <i className="fas fa-search" />
          </span>
        </form>
      </React.Fragment>
    )
  }

  render() {
    return (
      <section className="header navbar is-dark">
        <Clock time={this.props.time} />
        <h1 className="is-size-5">GeoLocation Weather App</h1>
        {this.renderFormInput()}
      </section>
    );
  }
}

export default HeaderContent;
