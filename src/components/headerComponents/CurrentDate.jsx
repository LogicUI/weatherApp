import Calandar from '../../helpers/Calendar';
import CalendarToday from '@material-ui/icons/CalendarToday';
import React from 'react';

const CurrentDate = () => {
  const today = new Calandar();
  return (
    <h1>
      <CalendarToday />
      {today.generateDate()}
    </h1>
  );
};

export default CurrentDate;


