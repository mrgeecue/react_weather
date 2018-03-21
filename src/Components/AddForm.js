import React from 'react';

const AddForm = (props) => {
    return(
      <div>
        <form onSubmit={props.getWeather}>
          <input type="text" name="zip" placeholder="Zip Code" />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }

export default AddForm;
