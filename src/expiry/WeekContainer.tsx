import React from 'react';
import { Moment } from 'moment';
import DayContainer from './DayContainer';
import './ExpiryPicker.scss';

interface WeekContainerProps {
    dates: (Moment | null)[];
    onClick: (date: Moment) => void;
}

const WeekContainer: React.FC<WeekContainerProps> = ({dates, onClick}) => {
    if (dates.length != 5) throw new Error(`Invalid number of elements for dates. Expected 5 got ${dates.length} dates`);

    return (<tr>{dates.map((x, i) => (<td key={`day-${i}`} className='week-cell-style'><DayContainer date={x} onClick={onClick}/></td>))}</tr>);
};

export default React.memo(WeekContainer);
