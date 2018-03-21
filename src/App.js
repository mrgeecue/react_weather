import React, { Component } from 'react';
import Titles from './Components/Titles';
import AddForm from './Components/AddForm';
import Weather from './Components/Weather';

const API_KEY = "17accbe2c653505158da06b56e5a561d";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      icon: undefined,
      error: undefined
    };

  }

  getWeather = async (e) => {
    e.preventDefault();
    const zip = e.target.zip.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    const iconCode = data.weather[0].icon;
    const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    if (zip ){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: iconUrl,
        error:""
      });
    } else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: "Please enter a zip Code"
    })
    alert(this.state.error);
  }
}



  render() {
    return (
      <div style={divStyle} className="App">
        <Titles />
        <AddForm getWeather={this.getWeather}/>
        <Weather state={this.state}/>
      </div>
    );
  }
}

const divStyle = {
  backgroundImage: "url(https://www.turquoisebayresort.com/wp-content/uploads/2015/09/weather.jpg)"
}
