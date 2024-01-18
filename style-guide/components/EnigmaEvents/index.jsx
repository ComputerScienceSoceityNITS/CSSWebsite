import React, { useState, useEffect,useRef } from 'react';
import Data from "../../../_json/events/enigmaContests.json"; 
import Styles from './style.module.css';
// import index from '../../page-component/Members2021';

const EventsList = () => {
    const [jsonData, setJsonData] = useState(Data);
    const [year,setYear] = useState( 2024 );
    const [yearWiseData,setYearWiseData] = useState(jsonData.filter((obj) => obj.Date.toString().slice(0, 4) === year.toString()));
    const yearRef = useRef(null);
    const uniqueYears = Array.from(new Set(jsonData.map(entry => entry.Date.slice(0, 4)))).sort();

    console.log({yearWiseData})
    useEffect((e)=>{
            setYearWiseData(jsonData.filter((obj) => obj.Date.toString().slice(0, 4) === year.toString()));
        },[year, jsonData])
    
    function dateHeading(inputDate) {
        // Parse the input date string
        const dateObject = new Date(inputDate);
      
        // Define month names and weekday names
        const monthNames = [
          'January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'
        ];
      
        const weekdayNames = [
          'Sunday', 'Monday', 'Tuesday', 'Wednesday',
          'Thursday', 'Friday', 'Saturday'
        ];
      
        // Extract components from the date object
        // const year = dateObject.getFullYear();
        const month = dateObject.getMonth();
        const day = dateObject.getDate();
        const weekday = dateObject.getDay();
      
        // Format the output string
        const formattedDate = `${day} ${monthNames[month]}, ${weekdayNames[weekday]}`;
      
        return formattedDate;
      }
      

    // Function to format a date
    const formatDate = (date, format) => {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        };
        const today = new Date(date).toLocaleDateString(undefined, options);
        return format
        .replace('yyyy', today.slice(6, 10))
        .replace('mm', today.slice(0, 2))
        .replace('dd', today.slice(3, 5));
    };
    const Today = formatDate(new Date(), 'yyyy-mm-dd');
    // const eventDate = new Date(event.Date);
    const todayDate = new Date();
    
    const upcomingEvents = yearWiseData.filter((event) =>{
            const eventDate = new Date(event.Date);
    return(
            eventDate > todayDate || formatDate(eventDate, 'yyyy-mm-dd') === Today )});

    
    const pastEvents = yearWiseData.filter((event) =>{ 
        const eventDate = new Date(event.Date);
        console.log(eventDate,'1'); 
        console.log(todayDate,'2'); 
        console.log(todayDate === eventDate); 
    return(
            eventDate < todayDate && formatDate(eventDate, 'yyyy-mm-dd') !== Today )});
    
    const pastSortedData =pastEvents.sort((a,b)=> new Date(b.Date) - new Date(a.Date));
    const upcomingSortedData = upcomingEvents.sort((a,b) => new Date(a.Date) - new Date(b.Date));
    
    
    return (
        <div className={Styles.Main}>
            <h1 className={Styles.Timestamp}>Timestamp</h1>
            <div className={Styles.Year}>
                {uniqueYears.map((data)=>
                <div ref={yearRef} className={Styles.yr} key={data} value={data} style={{
                color:data === year && '#fff',
                borderColor:data === year && 'transparent',
                background: data === year &&'-webkit-gradient(linear,left top,right top,from(#f7085a),to(#be4c9b))MozAnimation',
                background: data === year && '-moz-linear-gradient(left,#f7085a,#be4c9b)',
                background: data === year && 'linear-gradient(90deg,#f7085a,#be4c9b)',}} onClick={() => setYear(data)}>
                    {data}
                </div>
                )}
            </div>
            <div className={Styles.container}>
                <div className={Styles.upcomingEvents}>
                    <h2>UPCOMING ENIGMAS</h2>
                    {(upcomingEvents.length > 0) ?
                    <div className={Styles.Title}>
                        {upcomingSortedData.map((data) => (
                            <div key={data.key} className={Styles.upEvents}>
                                <div className={Styles.up}>
                                    <div className={Styles.dateheading}>{dateHeading(data.Date)}</div>
                                    <div>Date :{data.Date}</div>
                                    <div>Time :{data.Time}</div>
                                    <a href ={data.codeforces_link} className={Styles.contestLink}>Go to Contest</a>
                                </div>
                            </div>
                        ))}
                    </div> :<div className={Styles.Title} style={{ padding:'50px 0'}}>No Upcoming Enigmas</div>}
                </div>

                <div className={Styles.pastEvents}>
                <h2>PAST ENIGMAS</h2>
                    { pastSortedData.length >0 ? <div className={Styles.Title}>
                        {pastSortedData.map((data) => (
                            <div key={data.key} className={Styles.pEvents}>
                                <div className={Styles.p}>
                                    <div className={Styles.dateheading}>{dateHeading(data.Date)}</div>
                                    <div>Date : {data.Date}</div>
                                    <div>Time : {data.Time}</div>
                                    <a href ={data.codeforces_link}>Go to Contest</a>
                                </div>
                            </div>
                        ))}
                    </div>:<div style={{ padding:'20px 0'}}>No past enigmas in this year</div>}
                </div>
            </div>
        </div>
    );
};

export default EventsList;
