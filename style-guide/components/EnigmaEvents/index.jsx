import React, { useState } from 'react';
import Data from "../../../_json/events/enigmaContests.json"; 
import Styles from './style.module.css';

const EventsList = () => {
    const [jsonData, setJsonData] = useState(Data); 

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
    const upcomingEvents = jsonData.filter((event) => event.Date >= Today );
    const pastEvents = jsonData.filter((event) => event.Date < Today);
    
    const pastSortedData =pastEvents.sort((a,b)=> new Date(b.Date) - new Date(a.Date));
    const upcomingSortedData = upcomingEvents.sort((a,b) => new Date(a.Date) - new Date(b.Date));
    return (
        <div className={Styles.Main}>
            <h1>ENIGMAS</h1>
            <div className={Styles.container}>
                <div className={Styles.upcomingEvents}>
                <h2>UPCOMING</h2>
                    <div className={Styles.Title}>
                        {upcomingEvents.map((data) => (
                            <div key={data.key} className={Styles.upEvents}>
                                <div>Time of contest:{data.Time}</div>
                                <div>Date of contest:{data.Date}</div>
                                <a href ={data.codeforces_link} >Go to Contest</a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={Styles.pastEvents}>
                <h2>PAST</h2>
                    <div className={Styles.Title}>
                        {pastEvents.map((data) => (
                            <div key={data.key} className={Styles.pEvents}>
                                <div>Time of contest:{data.Time}</div>
                                <div>Date of contest:{data.Date}</div>
                                <a href ={data.codeforces_link} >Go to Contest</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsList;
