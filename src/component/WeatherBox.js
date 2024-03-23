import React from 'react';
import Loading from './Loading';

const WeatherBox = ({weatherData, fahrenheit, loading}) => {
  return (
    <div className='weather'>
        <div className='img'>
            {loading ? <Loading /> : <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`} alt={weatherData?.weather[0].description}/>}
        </div>
        <div className='txt'>
            <div className='info'>
                <strong className='city'>{weatherData?.name}</strong>
                <p className='description'>{weatherData?.weather[0].description}</p>
            </div>
            <div className='num'>
                <p className='temp'>{weatherData?.main.temp}</p>
                <p className='fahrenheit'>{fahrenheit}</p>
            </div>
        </div>
    </div>
  )
}

export default WeatherBox