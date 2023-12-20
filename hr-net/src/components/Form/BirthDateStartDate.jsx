// DateOfBirthStartDateInputs.jsx
import React from 'react';
import DatePicker from '../DatePicker/DatePicker.jsx';

const BirthDateStartDate = ({ formData, handleDateChange, formErrors }) => (
  <div className="dates-container">
    <div className="container-date-of-birth-and-start-day">
      <label htmlFor="date-of-birth">Date of Birth</label>
      <DatePicker
        selected={formData.dateOfBirth}
        onChange={(date) => handleDateChange(date, 'dateOfBirth')}
      />
      {formErrors.dateOfBirth && <p className="error-message">{formErrors.dateOfBirth}</p>}
    </div>
    <div className="container-date-of-birth-and-start-day">
      <label htmlFor="start-date">Start Date</label>
      <DatePicker
        selected={formData.startDate}
        onChange={(date) => handleDateChange(date, 'startDate')}
      />
      {formErrors.startDate && <p className="error-message">{formErrors.startDate}</p>}
    </div>
  </div>
);

export default BirthDateStartDate;
