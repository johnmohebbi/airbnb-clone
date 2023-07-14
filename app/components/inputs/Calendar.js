"use client";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
const Calendar = ({ value, onChange, disabledDates }) => {
  return <DateRange 
            rangeColors={['#3d91ff']}
            ranges={[value]}
            date={new Date()}
            onChange={onChange}
            direction="vertical"
            showDateDisplay={false}
            disabledDates={disabledDates}
            minDate={new Date()}
            
  />;
};

export default Calendar;
