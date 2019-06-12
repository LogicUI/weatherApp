import NavButtons from '../NavButtons.jsx';
import shortid from 'shortid';
import React from 'react';

const renderNavButtons = (array, handleNavButton) => {
  return array.map((element) => {
    return (
      <NavButtons
        key={shortid.generate()}
        foreCastDay={element}
        handleNavButton={handleNavButton}
      />
    );
  });
};

export default renderNavButtons;
