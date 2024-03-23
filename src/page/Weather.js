import React, { useEffect, useState } from 'react'

const Weather = () => {
    // 1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다.
    // 2. 날씨정보에는 도시, 섭씨 화씨 날씨상태
    // 3. 5개의 버튼이 있다 (1개는 현재위치, 4개는 다른도시)
    // 4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다.
    // 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
    // 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.
    // 0235571f80ab4a3bbaf3f81020f0c8ac
    const APIKey = '0235571f80ab4a3bbaf3f81020f0c8ac';
    const [fahrenheit, setFahrenheit] = useState(0);
    const [weatherData, setWeatherData] = useState(null);
    


    const getCurrentLocation = () => {
        console.log("getCurrentLocation");
        navigator.geolocation.getCurrentPosition(locationPosition);
    }

    const locationPosition = (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(latitude,longitude)
        apiData(latitude,longitude)
        
    }

    const apiData = async(lat,lon) => {
        const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
        try {
            const result = await fetch(API);
            const data = await result.json();
            setWeatherData(data)
            tempConvert(data.main.temp)
            console.log(data)
        } catch {
            console.log("실패")
        }
    }

    const tempConvert = (temp) => {
        let fahrenheit = temp * 9/5 + 35;
        setFahrenheit(fahrenheit.toFixed(2));
    }

    useEffect(() => {
        getCurrentLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div className='weather_area content'>
        <h1 className='main_title'>오늘의 날씨</h1>
        <div className='weather'>
            <div className='img'>
                {weatherData && <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} alt={weatherData?.weather[0].description}/>}
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
    </div>
  )
}

export default Weather