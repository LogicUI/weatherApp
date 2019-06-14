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
   * render the content related to weather data 
   */
  _renderContent = ({ location, current, forecast }) => {
    const newCurrent = mapCurrentData(current); // map data to usable data
    const newForeCast = mapForeCastToDays(forecast.forecastday);
    this.setState({
      location,
      todayWeather: newCurrent,
      current: newCurrent,
      forecast: newForeCast,
      time: location.tz_id
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
      this._renderContent(response);
    } catch (err) {
      alert("unable to fetch weather data ensure that you accept permissions")
    }
  };

  /**
   * changes the main content to show the weather on that day based on the nav button clicked
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
   * changes the weather app country based on the input search term 
   */
  handleSearchButton = async (value) => {
    try {
      const response = await searchWeatherData(value);
      this._renderContent(response);
    } catch (err) {
      alert(`input of ${value} did not find any results`);
    }
  };

  render() {
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
