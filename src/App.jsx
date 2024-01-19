import React, { useEffect, useState } from 'react';

import './App.css';
import DarkModeBtn from './components/darkModeBtn/DarkModeBtn';
import CurrentDateBlock from './components/currentDateBlock/CurrentDateBlock';
import WeatherStatsBlock from './components/weatherStatsBlock/WeatherStatsBlock';
import DaysForecast from './components/daysForecast/DaysForecast';
import HourlyForecast from './components/hourlyForecast/HourlyForecast';
import Search from './components/search/Search';
import CurrentLocationBtn from './components/currentLocationBtn/CurrentLocationBtn';

function App() {
  const [forecast, setForecast] = useState([]); 
  const [location, setLocation] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [clicked, setClicked] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isDark, setIsDark] = useState(true);

  console.log(isDark);

  useEffect(() =>{
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=1322502c8f484e78be7101414241601&q=${`${latitude || longitude ? `${latitude}, ${longitude}` : ''}` || `${searchValue.length > 2 ? searchValue : ''}`}&days=5`)
      .then((response) => response.json())
      .then((data) =>{
        setForecast(data);
        setLocation(data?.location?.name)
      })
      .catch((err) =>{
        console.warn(err);
        alert('Error');
      })
      .finally(() => console.log('finally 2'));
    
      
  }, [clicked, latitude, longitude]);

  return (
    <div className='wrapper' style={{background: isDark ? 'linear-gradient(110deg, #383838 45%, rgba(0, 0, 0, 1) 133.82%)' : 'linear-gradient(113deg, #FFF 0.28%, rgba(70, 97, 115, 1.0) 158.65%)'}}>
      <div className="container">
        <div className="header">
          <DarkModeBtn isDark={isDark} setIsDark={setIsDark}/>
          <Search value={searchValue} setSearchValue={setSearchValue} clicked={clicked} setClicked={setClicked} setLatitude={setLatitude} setLongitude={setLongitude} isDark={isDark}/>
          <CurrentLocationBtn setLatitude={setLatitude} setLongitude={setLongitude}/>
        </div>
        <div className="flex">
          <CurrentDateBlock location={location} isDark={isDark}/>
          {location && <WeatherStatsBlock data={forecast} isDark={isDark}/>}
          {location && <DaysForecast data={forecast} isDark={isDark}/>}
          {location && <HourlyForecast data={forecast} isDark={isDark}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
