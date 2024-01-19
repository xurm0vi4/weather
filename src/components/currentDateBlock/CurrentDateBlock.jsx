import React, { useEffect, useState } from "react";
import { takeDate } from "../../utils/takeDate";

import styles from './CurrentDateBlock.module.css'


const CurrentDateBlock = ({location, isDark}) => {
    const [date, setDate] = useState(new Date());

    useEffect(() =>{
       const interval = setInterval(()=>{
        setDate(new Date());
       }, 1000);
       return () => clearInterval(interval);
    }, [])

    const time = [date.getHours(), date.getMinutes()].map((x) =>{
        return x < 10 ? '0' + x : x;
    }).join(':');


    return (  
        <section className={styles.block} style={{background: isDark ? '#444444' : '#D9D9D9'}}>
            <h2 className={styles.title} style={{color: isDark ? '#fff' : '#292929'}}>{location}</h2>
            <p className={styles.time} style={{color: isDark ? '#fff' : '#292929'}}>{time}</p>
            <p className={styles.subtitle} style={{color: isDark ? '#fff' : '#292929'}}>{takeDate(date)}</p>
        </section>
    );
}
 
export default CurrentDateBlock;