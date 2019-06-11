import LocalAirport from '@material-ui/icons/LocalAirport';
import React from 'react'


const Country = ({ country }) => {
  return (
    <h1>
      <LocalAirport />
      {country}
    </h1>
  );
};

export default Country;

