import React from "react";

import styles from './DarkModeBtn.module.css';

import circle from '../../img/black-ellipse.svg';

const DarkModeBtn = ({isDark, setIsDark}) => {
    function clickHandler(){
        if(isDark === true){
            setIsDark(false);
        } else{
            setIsDark(true);
        }
    }
    return (  
        <div>
            <button onClick={clickHandler} className={styles.darkmodeBtn}>
                <img src={circle} alt="circle" className={styles.darkmodeImg} style={{left: isDark ? '65px' : '5px'}}/>
            </button>
            <p className={styles.text} style={{color: isDark ? '#fff' : '#000'}}>{isDark ? 'Dark Mode' : 'Light Mode'}</p>
        </div>
    );
}
 
export default DarkModeBtn;