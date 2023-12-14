import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './_DatePicker.scss';


const CustomDatePicker = ({ selected, onChange }) => {
    return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      scrollableYearDropdown
      minDate={new Date(1950, 0, 1)} 
      maxDate={new Date(2050, 11, 31)}
      todayButton="Today"
      dateFormat="dd/MM/yyyy"
      highlightDates={[new Date()]} 
      calendarClassName="custom-selected-date"
    />
  );
};

export default CustomDatePicker;

