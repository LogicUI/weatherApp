import renderNavButtons from './renderNavButtons';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

/**
 * check if nav is loaded from api , renders the buttons else renders a circular progress bar
 */
const loadStatus = (forecast, handleNavButton) => {
  if (forecast) {
    return renderNavButtons(forecast, handleNavButton);
  } else {
    return <CircularProgress />;
  }
};

export default loadStatus;
