import React from 'react';
import getWeatherData from '../helpers/getWeatherData';
import getCurrentPosition from '../apis/getCurrentPosition';
import Header from './headerComponents/Header.jsx';
import Main from "./Main.jsx";
import Nav from "./navComponents/Nav.jsx";
import {StyledRoot} from "../styled/StyledRoot";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {},
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
      this.setState({
        location,
        current,
        forecast: forecast.forecastday
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  // handleOnClick(value){

  // }

  render() {
    console.log(this.state.forecast);
    return (
      <StyledRoot>
        <Header country={this.state.location.country} />
        <Main current={this.state.current.condition}/>
        {/* <Nav forecast={this.state.forecast}/> */}
      </StyledRoot>
    );
  }
}

export default App;

