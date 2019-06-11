import React from 'react';
import { StyledNav } from '../../styled/StyledNav';
import CircularProgress from '@material-ui/core/CircularProgress';
import NavButtons from './NavButtons';
import shortid from 'shortid';

// const loadStatus = (current) => {
//     if (current) {
//         const { text, icon } = current;
//         return (
//             <React.Fragment>
//                 <img src={icon} alt="this is an weather icon" />
//                 <h1>{text}</h1>
//             </React.Fragment>
//         );
//     } else {
//         return <CircularProgress />;
//     }
// };

const renderNavButtons = (array) => {
  return array.map((element) => {
    return <NavButtons key={shortid.generate()} foreCastDay={element} />;
  });
};

const loadStatus = (forecast) => {
  if (forecast) {
    return renderNavButtons(forecast);
  } else {
    return <CircularProgress />;
  }
};

const Nav = ({ forecast }) => {
  return <StyledNav>{loadStatus(forecast)}</StyledNav>;
};

export default Nav;

// export class Nav extends Component {

//   render() {
//     return (
//       <StyledNav></StyledNav>
//     );
//   }
// }

// export default Nav;
