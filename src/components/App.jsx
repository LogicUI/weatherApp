import React from 'react';
import getWeatherData from '../helpers/getWeatherData';
import getCurrentPosition from '../apis/getCurrentPosition';
import Header from './headerComponents/Header.jsx';
import Main from './mainComponents/Main.jsx';
import Nav from './navComponents/Nav.jsx';
import mapForeCastToDays from '../helpers/mapForeCastToDays';
import mapCurrentData from '../helpers/mapCurrentData';
import searchWeatherData  from '../helpers/searchWeatherData';
import '../scss/app.scss';

/**
 * the parent component that fetches data from the api
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      forecast: [],
      location: {}
    };
  }

  /**
   * gets the response from the weatherapi and set the values to state 
   * @param location the name of country 
   * @param current the current weather data 
   * @param forecast forecasted weather data
   */
  _setNewState = ({ location, current, forecast }) => {
    const newCurrent = mapCurrentData(current); // get current data needed
    const newForeCast = mapForeCastToDays(forecast.forecastday); // get forecasted data needed 
    this.setState({
      location,  // country location 
      todayWeather: newCurrent, // shows todays weeather
      current: newCurrent, // current weather value to render by default 
      forecast: newForeCast, // forecast weather value
      time: location.tz_id // country timezone
    });
  };

  /**
   * fetches the weather based on the user geolocation data and sets the new state
   */
  componentDidMount = async () => {
    try {
      const { coords } = await getCurrentPosition(); // html geolocation
      const { latitude: latt, longitude: long } = coords;
      const response = await getWeatherData(latt, long); // apixu weather data
      this._setNewState(response);
    } catch (err) {
      alert("unable to fetch weather data ensure that you accept permissions")
    }
  };

  /**
   * changes the main content to show weather information for that particular day based on which nav button clicked
   */
  handleNavButton = (value) => {
    if (value.day !== this.state.current.day) {
      // check if the current state needs rerendering
      this.setState({
        current: value
      });
    }
  };

  /**
   * searches the weather data based on the user input 
   * @value the name of country to searcher
   */
  handleSearchButton = async (value) => {
    try {
      const response = await searchWeatherData(value);
      this._setNewState(response);
    } catch (err) {
      alert(`input of ${value} did not find any results`);
    }
  };

  render() {
    console.log(this.state.current);
    return (
      <section className="app">
        <Header time={this.state.time} search={this.handleSearchButton} />
        <Main
          current={this.state.current}
          country={this.state.location.country}
        />
        <Nav
          forecast={this.state.forecast}
          current={this.state.todayWeather}
          handleNavButton={this.handleNavButton}
        />
      </section>
    );
  }
}

export default App;
