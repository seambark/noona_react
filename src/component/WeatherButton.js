import React from 'react'

const WeatherButton = ({getLocationName, location}) => {
  const locationWeather = (e) => {
      getLocationName(e)
  }

  return (
    <div className='control'>
        <button type='button' onClick={() => locationWeather(location)}>Current Location</button>
        <button type='button' onClick={() => locationWeather('seoul')}>Seoul</button>
        <button type='button' onClick={() => locationWeather('london')}>London</button>
        <button type='button' onClick={() => locationWeather('hong kong')}>Hong kong</button>
        <button type='button' onClick={() => locationWeather('dubai')}>Dubai</button>
    </div>
  )
}

export default WeatherButton