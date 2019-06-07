import React from "react";
import getCurrentPosition from "../apis/getCurrentPosition"

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            longitude:0,
            latitude:0
        }
    }

    componentDidMount = async() =>{
        try{
            const {coords} = await getCurrentPosition()
            const { latitude, longitude } = coords;
            this.setState({longitude ,latitude});

        }catch(error){
            console.log(error.message);
        }
    }

    render(){
        return(
            <section>
                <h1>{this.state.longitude}</h1>
                <h1>{this.state.latitude}</h1>
            </section>
        )
    }

}

export default Weather;