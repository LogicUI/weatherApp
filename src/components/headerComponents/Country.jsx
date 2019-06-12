import LocalAirport from '@material-ui/icons/LocalAirport';
import React from 'react'
import "../../scss/generalized.scss";

const Country = ({ country }) => {
  return (
    <h1 className="is-size-5 flex-middle">
      <LocalAirport />
      {country}
    </h1>
  );
};

export default Country;

