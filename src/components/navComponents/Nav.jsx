import CircularProgress from '@material-ui/core/CircularProgress';
import NavButtons from './NavButtons.jsx';
import shortid from 'shortid';

import React, { Component } from 'react';

export class Nav extends Component {
  //   return array.map((element) => {
  //     return (
  //       <NavButtons
  //         key={shortid.generate()}
  //         foreCastDay={element}
  //         handleNavButton={handleNavButton}
  //       />
  //     );
  //   });

  _renderNavButtons() {
    return this.props.forecast.map((element) => {
      return (
        <NavButtons
          key={shortid.generate()}
          foreCastDay={element}
          handleNavButton={this.props.handleNavButton}
        />
      );
    });
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
    return <div>{this.loadStatus()}</div>;
  }
}

export default Nav;

// const Nav = ({ forecast, handleNavbutton}) => {
//   return (
//     <section className="nav">{loadStatus(forecast, handleNavbutton)}</section>
//   );
// };

// export default Nav;

// import NavButtons from '../NavButtons.jsx';
// import shortid from 'shortid';
// import React from 'react';

// const renderNavButtons = (array, handleNavButton) => {
//   return array.map((element) => {
//     return (
//       <NavButtons
//         key={shortid.generate()}
//         foreCastDay={element}
//         handleNavButton={handleNavButton}
//       />
//     );
//   });
// };

// export default renderNavButtons;

// /**
//  * check if nav is loaded from api , renders the buttons else renders a circular progress bar
//  */
// const loadStatus = (forecast, handleNavButton) => {
//   if (forecast) {
//     return renderNavButtons(forecast, handleNavButton);
//   } else {
//     return <CircularProgress />;
//   }
// };

// export default loadStatus;
