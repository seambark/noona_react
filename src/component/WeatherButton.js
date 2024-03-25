import React, {useState} from 'react'

const WeatherButton = ({getLocationName, location}) => {
  const cityList = ['seoul', 'london', 'hong kong', 'dubai'];
  const [city, setCity] = useState('');

  const locationWeather = (e) => {
      getLocationName(e)
      setCity(e)
  }

  return (
    <div className='control'>
      <button type='button' className={city === '' || city === location ? "active" : ""} onClick={() => locationWeather(location)}>Current Location</button>
      {cityList.map((item, idx) => {
        return (
          <button key={idx} type='button' className={city === item ? "active" : ""} onClick={() => locationWeather(item)}>{item}</button>
        )
      })}
    </div>
  )
}

export default WeatherButton