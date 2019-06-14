import React, { Component } from 'react';
import Clock from './Clock.jsx';
import '../../scss/header.scss';
import capitalized from "../../helpers/captializeFirst";

export class HeaderContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  handleOnChange = (event) => {
    this.setState({
      term:event.target.value
    })
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.search(capitalized(this.state.term));
    this.setState({
      term:""
    })
  }
  
  renderHeaderData() {
    return (
      <section className="header navbar is-dark">
        <Clock time={this.props.time} />
        <h1 className="is-size-5">GeoLocation Weather App</h1>
        <form className="control has-icons-right" onSubmit={this.onFormSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Search For Country "
            value={this.state.term}
            onChange={this.handleOnChange}
          />
          <span className="icon is-small is-right">
            <i className="fas fa-search" />
          </span>
        </form>
      </section>
    );
  }

  render() {
    return <React.Fragment>{this.renderHeaderData()}</React.Fragment>;
  }
}

export default HeaderContent;
