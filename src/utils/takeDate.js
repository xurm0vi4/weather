
export function takeDate(date){
    const dayNumber = date.getDate();
    const dayOfTheWeek = (date) =>{
        const dayIndex = date.getDay();
        if(dayIndex === 0) return 'Sunday';
        if(dayIndex === 1) return 'Monday';
        if(dayIndex === 2) return 'Tuesday';
        if(dayIndex === 3) return 'Wednesday';
        if(dayIndex === 4) return 'Thursday';
        if(dayIndex === 5) return 'Friday';
        if(dayIndex === 6) return 'Saturday';
    }
    const month = (date) =>{
        const monthIndex = date.getMonth();
        if(monthIndex === 0) return 'Jan';
        if(monthIndex === 1) return 'Feb';
        if(monthIndex === 2) return 'Mar';
        if(monthIndex === 3) return 'Apr';
        if(monthIndex === 4) return 'May';
        if(monthIndex === 5) return 'Jun';
        if(monthIndex === 6) return 'Jul';
        if(monthIndex === 7) return 'Aug';
        if(monthIndex === 8) return 'Sep';
        if(monthIndex === 9) return 'Oct';
        if(monthIndex === 10) return 'Nov';
        if(monthIndex === 11) return 'Dec';
    }
    return `${dayOfTheWeek(date)}, ${dayNumber} ${month(date)}`
}