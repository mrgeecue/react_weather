import React from 'react';

const Weather = ({state}, props) => (
      <div>
        { state.city && <p>Location: {state.city}</p> }
        { state.temperature && <p>Temperature: {state.temperature}</p>}
        { state.humidity && <p>Humidity: {state.humidity}</p>}
        { state.description && <p>Description: {state.description}</p>}
        <img src={state.icon}/>
      </div>
    );

export default Weather;
