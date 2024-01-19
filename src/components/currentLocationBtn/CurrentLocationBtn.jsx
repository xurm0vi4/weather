import React from "react";

import styles from './CurrentLocationBtn.module.css';

import nav from '../../img/current-location.svg';

const CurrentLocationBtn = ({setLatitude, setLongitude}) => {
    function success(pos){
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        setLatitude(latitude);
        setLongitude(longitude)
    }

    function buttonHandler() {
        navigator.geolocation.getCurrentPosition(success);
    }

    return (  
        <button onClick={buttonHandler} className={styles.button}>
            <img src={nav} alt="navigation" className={styles.img} />
            <p className={styles.text}>Current Location</p>
        </button>
    );
}
 
export default CurrentLocationBtn;