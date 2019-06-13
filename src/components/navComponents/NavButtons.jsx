import React from 'react';
import Calendar from '../../helpers/Calendar';
import "../../scss/generalized.scss";

const NavButtons = (props) => {
  return (
    <section className="flex-middle">
      <img src={props.foreCastDay.condition.icon} alt="shows the weather" />
      {props.foreCastDay.day}
    </section>
  );
};

export default NavButtons;
