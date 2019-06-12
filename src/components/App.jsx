import React from 'react';
import getWeatherData from '../helpers/getWeatherData';
import getCurrentPosition from '../apis/getCurrentPosition';
import Header from './headerComponents/Header.jsx';
import Main from './Main.jsx';
import Nav from './navComponents/Nav.jsx';
import mapForeCastToDays from '../helpers/mapForeCastToDays';
import "../scss/app.scss";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {},
      forecast: null,
      location: {}
    };
  }

  componentDidMount = async () => {
    try {
      const { coords } = await getCurrentPosition();
      const { latitude: latt, longitude: long } = coords;
      const response = await getWeatherData(latt, long);
      const { location, current, forecast } = response.data;
      const newForeCast = mapForeCastToDays(forecast.forecastday);
      console.log(newForeCast);
      this.setState({
        location,
        current,
        forecast: newForeCast
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <section className="app">
        <Header country={this.state.location.country} />
        <Main current={this.state.current.condition} />
        <Nav forecast={this.state.forecast} current={this.state.current.condition} />
      </section>
    );
  }
}

export default App;
