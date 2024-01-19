import React from "react";

import styles from './WeatherStatsBlock.module.css';

import sunriseWhite from '../../img/sunrise-white.svg';
import sunriseBlack from '../../img/sunrise-black.svg';
import sunsetWhite from '../../img/sunset-white.svg';
import sunsetBlack from '../../img/sunset-black.svg';
import humidity from '../../img/humidity.svg';
import humidityBlack from '../../img/humidity-black.svg';
import wind from '../../img/wind.svg';
import windBlack from '../../img/wind-black.svg';
import pressureWhite from '../../img/pressure-white.svg';
import pressureBlack from '../../img/pressure-black.svg';
import uvWhite from '../../img/uv-white.svg';
import uvBlack from '../../img/uv-black.svg';


const WeatherStatsBlock = ({data, isDark}) => {
    const current = data.current;

    return (  
        <div className={styles.wrapper} style={{background: isDark ? '#444444' : '#D9D9D9'}}>
            <div className={styles.block1}>
                <p className={isDark ? styles.temp1White : styles.temp1Black} >{current?.temp_c}°C</p>
                <p className={styles.temp2} style={{color: isDark ? '#fff' : '#292929'}}>Feels like: <span>{current?.feelslike_c}°C</span></p>
                <div className={styles.sunriseBlock}>
                    <img src={isDark ? sunriseWhite : sunriseBlack} alt="sunrise" className={styles.sunriseImg}/>
                    <div className={styles.sunriseData}>
                        <p className={styles.sunriseTitle} style={{color: isDark ? '#fff' : '#292929'}}>Sunrise</p>
                        <p className={styles.sunriseTime} style={{color: isDark ? '#fff' : '#292929'}}>{data?.forecast?.forecastday[0]?.astro?.sunrise}</p>
                    </div>                    
                </div>
                <div className={styles.sunsetBlock}>
                    <img src={isDark ? sunsetWhite : sunsetBlack} alt="sunset" className={styles.sunsetImg}/>
                    <div className={styles.sunsetData}>
                        <p className={styles.sunsetTitle} style={{color: isDark ? '#fff' : '#292929'}}>Sunset</p>
                        <p className={styles.sunsetTime} style={{color: isDark ? '#fff' : '#292929'}}>{data?.forecast?.forecastday[0]?.astro?.sunset}</p>
                    </div> 
                </div>
            </div>
            <div className={styles.block2}>
                <img src={current?.condition?.icon} alt="cloud cover" className={styles.block2Img} />
                <p className={styles.block2Text} style={{color: isDark ? '#fff' : '#292929'}}>{current?.condition?.text}</p>
            </div>
            <div className={styles.block3}>
                <div className={styles.blockItem}>
                    <img src={isDark ? humidity : humidityBlack} alt="humidity" className={styles.blockItemImg} />
                    <p className={styles.blockItemData} style={{color: isDark ? '#fff' : '#292929'}}>{current?.humidity}%</p>
                    <p className={styles.blockItemText} style={{color: isDark ? '#fff' : '#292929'}}>Humidity</p>
                </div>
                <div className={styles.blockItem}>
                    <img src={isDark ? wind : windBlack} alt="wind" className={styles.blockItemImg} />
                    <p className={styles.blockItemData} style={{color: isDark ? '#fff' : '#292929'}}>{current?.wind_kph}km/h</p>
                    <p className={styles.blockItemText} style={{color: isDark ? '#fff' : '#292929'}}>Wind Speed</p>
                </div>
                <div className={styles.blockItem}>
                    <img src={isDark ? pressureWhite : pressureBlack} alt="pressure" className={styles.blockItemImg} />
                    <p className={styles.blockItemData} style={{color: isDark ? '#fff' : '#292929'}}>{current?.pressure_mb}hPa</p>
                    <p className={styles.blockItemText} style={{color: isDark ? '#fff' : '#292929'}}>Pressure</p>
                </div>
                <div className={styles.blockItem}>
                    <img src={isDark ? uvWhite : uvBlack} alt="uv" className={styles.blockItemImg}/>
                    <p className={styles.blockItemData} style={{color: isDark ? '#fff' : '#292929'}}>{current?.uv}</p>
                    <p className={styles.blockItemText} style={{color: isDark ? '#fff' : '#292929'}}>UV</p>
                </div>
            </div>
        </div>
    );
}
 
export default WeatherStatsBlock;