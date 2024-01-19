import React from "react";

import styles from './Search.module.css';

import search from '../../img/search.svg';

const Search = ({value, setSearchValue, clicked, setClicked, setLatitude, setLongitude, isDark}) => {

    function buttonHandler(){
        if(clicked === false){
            setClicked(true);
            setLatitude(0);
            setLongitude(0);
        }
        else{
            setClicked(false);
            setLatitude(0);
            setLongitude(0);
        }
    }

    function pressEnter(e){
        if(e.key === 'Enter'){
            if(clicked === false){
                setClicked(true);
                setLatitude(0);
                setLongitude(0);
            }
            else{
                setClicked(false);
                setLatitude(0);
                setLongitude(0);
            }
        }
    }

    return (  
        <div className={isDark ? styles.wrapperDark : styles.wrapperLight}>
            <button onClick={buttonHandler} type="button" className={styles.button}>
                <img src={search} alt="search" className={styles.img} />
            </button>
            <input onKeyDown={pressEnter} value={value} onChange={e => setSearchValue(e.target.value)} type="text" className={styles.input} placeholder="Search for your preffered city..." style={{color: isDark ? 'rgba(255, 255, 255, 0.60)' : '#292929'}}/>
        </div>
    );
}
 
export default Search;