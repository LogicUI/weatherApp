import React from 'react';
import getWeatherData from '../helpers/getWeatherData';
import getCurrentPosition from '../apis/getCurrentPosition';
import Header from './headerComponents/Header.jsx';
import Main from './Main.jsx';
import Nav from './navComponents/Nav.jsx';
import mapForeCastToDays from '../helpers/mapForeCastToDays';
import mapCurrentData from '../helpers/mapCurrentData';
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

  componentDidMount = async () => {
    try {
      const { coords } = await getCurrentPosition();
      const { latitude: latt, longitude: long } = coords;
      const response = await getWeatherData(latt, long);
      const { location, current, forecast } = response.data;
      const newCurrent = mapCurrentData(current);
      const newForeCast = mapForeCastToDays(forecast.forecastday);
      this.setState({
        location,
        todayWeather:newCurrent,
        current: newCurrent,
        forecast: newForeCast
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleNavButton = (value) => {
      this.setState({
        current:value
      })
  };

  render() {
    return (
      <section className="app">
        <Header country={this.state.location.country} />
        <Main current={this.state.current} />
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
