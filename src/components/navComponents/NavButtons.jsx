import React from 'react';
import Calendar from '../../helpers/Calendar';
import "../../scss/generalized.scss";

const NavButtons = (props) => {
  const getDay = new Calendar();
  getDay.setNewDate(props.foreCastDay.date);
  const dayName = getDay.getDayName();

  return (
    <section className="flex-middle">
      <img src={props.foreCastDay.condition.icon} alt="shows the weather" />
      {dayName}
    </section>
  );
};

export default NavButtons;
