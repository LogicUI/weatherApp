import React from 'react'
import Calendar from '../../helpers/Calendar';
import {StyledNavButtons} from "../../styled/StyledNavButtons"




const NavButtons = (props) => {
    const getDay = new Calendar();
    console.log(props);
    return (
        <StyledNavButtons>
         <img src={props.foreCastDay.condition.icon} alt="shows the weather"/>
        </StyledNavButtons>
    )
}


export default NavButtons;