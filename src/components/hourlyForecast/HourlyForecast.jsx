import React from "react";
import styles from './HourlyForecast.module.css';

import clouds from '../../img/clouds.svg';
import mist from '../../img/mist.svg';
import clear from '../../img/clear.svg';
import drizzle from '../../img/drizzle.svg';
import rain from '../../img/rain.svg';
import navigation from '../../img/navigation.svg';


const HourlyForecast = ({data, isDark}) => {
    const forecast = data?.forecast;
    
    return (  
        <section className={styles.wrapper} style={{background: isDark ? '#444444' : '#D9D9D9'}}>
            <h2 className={styles.title} style={{color: isDark ? '#fff' : '#292929'}}>Hourly Forecast:</h2>
            <div className={styles.container}>
                <div className={styles.item} style={{background: isDark ? '#373636' : 'linear-gradient(171deg, #F88508 -12.41%, rgba(246, 250, 217, 0.00) 163.32%)'}}>
                    <p className={styles.itemTime} style={{color: isDark ? '#fff' : '#292929'}}>12:00</p>
                    <img src={forecast?.forecastday[0]?.hour[12]?.condition?.icon} alt="cloud cover" className={styles.itemImg} />
                    <p className={styles.itemTemp} style={{color: isDark ? '#fff' : '#292929'}}>{forecast?.forecastday[0]?.hour[12]?.temp_c}°C</p>
                    <img src={navigation} alt="navigation" className={styles.itemWindImg} style={{transform: `rotate(${forecast?.forecastday[0]?.hour[12]?.wind_degree}deg)`}} />
                    <p className={styles.itemWindSpeed} style={{color: isDark ? '#fff' : '#292929'}}>{forecast?.forecastday[0]?.hour[12]?.wind_kph}km/h</p>
                </div>
                <div className={styles.item} style={{background: isDark ? '#373636' : 'linear-gradient(171deg, #F88508 -12.41%, rgba(246, 250, 217, 0.00) 163.32%)'}}>
                    <p className={styles.itemTime} style={{color: isDark ? '#fff' : '#292929'}}>15:00</p>
                    <img src={forecast?.forecastday[0]?.hour[15]?.condition?.icon} alt="cloud cover" className={styles.itemImg} />
                    <p className={styles.itemTemp} style={{color: isDark ? '#fff' : '#292929'}}>{forecast?.forecastday[0]?.hour[15]?.temp_c}°C</p>
                    <img src={navigation} alt="navigation" className={styles.itemWindImg} style={{transform: `rotate(${forecast?.forecastday[0]?.hour[15]?.wind_degree}deg)`}} />
                    <p className={styles.itemWindSpeed} style={{color: isDark ? '#fff' : '#292929'}}>{forecast?.forecastday[0]?.hour[15]?.wind_kph}km/h</p>
                </div>
                <div className={styles.item} style={{background: isDark ? '#373636' : 'linear-gradient(171deg, #F88508 -12.41%, rgba(246, 250, 217, 0.00) 163.32%)'}}>
                    <p className={styles.itemTime} style={{color: isDark ? '#fff' : '#292929'}}>18:00</p>
                    <img src={forecast?.forecastday[0]?.hour[18]?.condition?.icon} alt="cloud cover" className={styles.itemImg} />
                    <p className={styles.itemTemp} style={{color: isDark ? '#fff' : '#292929'}}>{forecast?.forecastday[0]?.hour[18]?.temp_c}°C</p>
                    <img src={navigation} alt="navigation" className={styles.itemWindImg} style={{transform: `rotate(${forecast?.forecastday[0]?.hour[18]?.wind_degree}deg)`}} />
                    <p className={styles.itemWindSpeed} style={{color: isDark ? '#fff' : '#292929'}}>{forecast?.forecastday[0]?.hour[18]?.wind_kph}km/h</p>
                </div>
                <div className={styles.item} style={{background: isDark ? '#373636' : 'linear-gradient(174deg, #443D64 -15.92%, rgba(101, 130, 198, 0.00) 192.45%)'}}>
                    <p className={styles.itemTime} style={{color: isDark ? '#fff' : '#292929'}}>21:00</p>
                    <img src={forecast?.forecastday[0]?.hour[21]?.condition?.icon} alt="cloud cover" className={styles.itemImg} />
                    <p className={styles.itemTemp} style={{color: isDark ? '#fff' : '#292929'}}>{forecast?.forecastday[0]?.hour[21]?.temp_c}°C</p>
                    <img src={navigation} alt="navigation" className={styles.itemWindImg} style={{transform: `rotate(${forecast?.forecastday[0]?.hour[21]?.wind_degree}deg)`}} />
                    <p className={styles.itemWindSpeed} style={{color: isDark ? '#fff' : '#292929'}}>{forecast?.forecastday[0]?.hour[21]?.wind_kph}km/h</p>
                </div>
                <div className={styles.item} style={{background: isDark ? '#373636' : 'linear-gradient(174deg, #443D64 -15.92%, rgba(101, 130, 198, 0.00) 192.45%)'}}>
                    <p className={styles.itemTime} style={{color: isDark ? '#fff' : '#292929'}}>00:00</p>
                    <img src={forecast?.forecastday[1]?.hour[0]?.condition?.icon} alt="cloud cover" className={styles.itemImg} />
                    <p className={styles.itemTemp} style={{color: isDark ? '#fff' : '#292929'}}>{forecast?.forecastday[1]?.hour[0]?.temp_c}°C</p>
                    <img src={navigation} alt="navigation" className={styles.itemWindImg} style={{transform: `rotate(${forecast?.forecastday[1]?.hour[0]?.wind_degree}deg)`}} />
                    <p className={styles.itemWindSpeed} style={{color: isDark ? '#fff' : '#292929'}}>{forecast?.forecastday[1]?.hour[0]?.wind_kph}km/h</p>
                </div>
            </div>
        </section>
    );
}
 
export default HourlyForecast;