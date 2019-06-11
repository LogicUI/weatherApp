import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledMain } from '../styled/StyledMain';

const loadStatus = (current) => {
  if (current) {
    const { text, icon } = current;
    return (
      <React.Fragment>
        <img src={icon} alt="this is an weather icon" />
        <h1>{text}</h1>
      </React.Fragment>
    );
  } else {
    return <CircularProgress />;
  }
};

const Main = ({ current }) => {
  return <StyledMain column>{loadStatus(current)}</StyledMain>;
};

export default Main;

