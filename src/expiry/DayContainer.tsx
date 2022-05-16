import React from 'react';
import { Moment } from 'moment';
import { Button } from '@mui/material';
import './ExpiryPicker.scss';

interface DayContainerProps {
    date: Moment | null;
    onClick: (date: Moment) => void;
}

const DayContainer: React.FC<DayContainerProps> = ({date, onClick}) => {
    if (date === null) {
        return (<Button variant={'text'} disabled className='day-button-style'>&nbsp;</Button>);
    }

    return (<Button variant={'outlined'} className='day-button-style' onClick={() => onClick(date)}>{date.date().toString()}</Button>);
};

export default React.memo(DayContainer);
