import React, { Component } from 'react';
import Calendar from '../../helpers/Calendar';
import { StyledNav } from '../../styled/StyledNav';

export class Nav extends Component {
  constructor(props) {
      super(props);
      this.state = {
          days:[]
      }
  }

  componentDidMount() {
    const MappedValues = this.props.
  }

  render() {
    return <StyledNav />;
  }
}

export default Nav;
