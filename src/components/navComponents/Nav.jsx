import React from 'react';
import loadStatus from "./navhelpers/renderNavButtons.jsx";

const Nav = ({ forecast, handleNavbutton}) => {
  return (
    <section className="nav">{loadStatus(forecast, handleNavbutton)}</section>
  );
};

export default Nav;
