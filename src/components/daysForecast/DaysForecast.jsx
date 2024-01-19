import React from "react";
import styles from './DaysForecast.module.css';

import { takeDate } from "../../utils/takeDate";


const DaysForecast = ({data, isDark}) => {
    const firstDay = new Date();
    const secondDay = new Date(firstDay.getTime() + (24 * 60 * 60 * 1000));
    const thirdDay = new Date(firstDay.getTime() + (24 * 60 * 60 * 1000 * 2));
    const fourthDay = new Date(firstDay.getTime() + (24 * 60 * 60 * 1000 * 3));
    const fifthDay = new Date(firstDay.getTime() + (24 * 60 * 60 * 1000 * 4));

    const forecast = data?.forecast;

    return (  
        <section className={styles.wrapper} style={{background: isDark ? '#444' : '#D9D9D9'}}>
            <h2 className={styles.title} style={{color: isDark ? '#FFF' : '#292929'}}>5 Days Forecast:</h2>
            <div className={styles.forecast}>
                <div className={styles.images}>
                    <img src={forecast?.forecastday[0]?.day?.condition?.icon} alt="cloud cover" className="image" />
                    <img src={forecast?.forecastday[1]?.day?.condition?.icon} alt="cloud cover" className="image" />
                    <img src={forecast?.forecastday[2]?.day?.condition?.icon} alt="cloud cover" className="image" />
                    <img src={forecast?.forecastday[3]?.day?.condition?.icon} alt="cloud cover" className="image" />
                    <img src={forecast?.forecastday[4]?.day?.condition?.icon} alt="cloud cover" className="image" />
                </div>
                <div className={styles.temps} style={{color: isDark ? '#FFF' : '#292929'}}>
                    <p className={styles.temp}>{forecast?.forecastday[0]?.day?.maxtemp_c}°C</p>
                    <p className={styles.temp}>{forecast?.forecastday[1]?.day?.maxtemp_c}°C</p>
                    <p className={styles.temp}>{forecast?.forecastday[2]?.day?.maxtemp_c}°C</p>
                    <p className={styles.temp}>{forecast?.forecastday[3]?.day?.maxtemp_c}°C</p>
                    <p className={styles.temp}>{forecast?.forecastday[4]?.day?.maxtemp_c}°C</p>
                </div>
                <div className={styles.dates} style={{color: isDark ? '#FFF' : '#292929'}}>
                    <p className={styles.date}>{takeDate(firstDay)}</p>
                    <p className={styles.date}>{takeDate(secondDay)}</p>
                    <p className={styles.date}>{takeDate(thirdDay)}</p>
                    <p className={styles.date}>{takeDate(fourthDay)}</p>
                    <p className={styles.date}>{takeDate(fifthDay)}</p>
                </div>
            </div>
        </section>
    );
}
 
export default DaysForecast;