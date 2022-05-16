import React, { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import ExpiryPicker from './ExpiryPicker';


const TestExpiryPicker = () => {
    const [dates, setDates] = useState<Moment[]>([]);

    useEffect(() => {
        let date = moment.utc(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD');
        const dates: Moment[] = [];
        for (let i = 0; i <= 90; i++) {
            if (i % 6 != 0)
                dates.push(date);
            date = date.clone().add(1, 'd');
        }
        setDates(dates);
    }, []);

    const onDateClick = (date: Moment) => {
        console.log(date.toISOString());
    };

    return (<div><ExpiryPicker dates={dates} onDateClick={onDateClick}/></div>);
};

export default React.memo(TestExpiryPicker);
