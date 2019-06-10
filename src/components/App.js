import React from 'react';
import Header from './Header.js';
import { StyledRoot } from '../styled/StyledRoot';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    return <div>Test</div>;
  }
}

// const App = () => {
//   return (
//     <StyledRoot>
//       {/* <Header />
//       <Main /> */}
//     </StyledRoot>
//   );
// };

const mapStateToProps = (state) => {
  return { weatherData: state.weather.location, errors: state.err };
};

export default connect(
  null,
  { fetchWeather }
)(App);

// class App extends React.Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       lattitude:0,
//       longtitude:0
//     }
//   };

//   componentDidMount = async() =>{
//     const
//   }

//   render() {
//     return <section>App</section>;
//   }
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import isEmpty from 'lodash.isempty';

// const Weather = ({ match, forecast }) => {
//   const weatherId = Number(match.params.weatherId);
//   const weather = forecast.find((w) => w.id === weatherId);
//   return (
//     <React.Fragment>
//       <h1>Today's weather</h1>
//       <h2>{weather.weather_state_name}</h2>
//     </React.Fragment>
//   );
// };

// const NavBar = ({ forecast }) => {
//   return (
//     <nav>
//       {forecast.map((w) => {
//         return (
//           <li>
//             <Link to={`/weather/${w.id}`}>{w.applicable_date}</Link>
//           </li>
//         );
//       })}
//     </nav>
//   );
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       forecast: []
//     };
//   }

//   componentDidMount = async () => {
//     try {
//       const proxy = 'https://cors-anywhere.herokuapp.com/';
//       const api = 'https://www.metaweather.com/api/location/1062617/';
//       const url = proxy + api;

//       const response = await fetch(url);
//       const json = await response.json();
//       this.setState({ forecast: json.consolidated_weather });
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   render() {
//     return (
//       <Router>
//         <div>
//           <NavBar forecast={this.state.forecast} />
//           {!isEmpty(this.state.forecast) && (
//             <main>
//               <Route
//                 path="/weather/:weatherId"
//                 render={(props) => (
//                   <Weather
//                     forecast={this.state.forecast}
//                     match={props.match}
//                     {...props}
//                   />
//                 )}
//               />
//             </main>
//           )}
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
