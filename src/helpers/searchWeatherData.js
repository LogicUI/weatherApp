import apixu from '../apis/apixu';
import validateSearch from './validateSearch';

/**
 * fetches the  forecasted api data using the country name as the query
 * @param {*} country the name of the country to fetch the api from
 */
const searchWeatherData = async (country) => {
  const response = await apixu.get('forecast.json', {
    params: {
      key: 'cccb75dd9c9942cf958131844190806',
      q: country,
      days: 5
    }
  });

  if (validateSearch(response, country)) {
    return response.data;
  } else {
    throw new Error(`input of ${country} did not find any results`);
  }
};

export default searchWeatherData;
