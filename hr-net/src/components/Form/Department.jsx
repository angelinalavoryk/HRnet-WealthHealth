import React from 'react';
import Select from 'react-select';

const Department = ({ formData, handleSelectChange, formErrors }) => (
  <div className="department">
    <label htmlFor="department">Department</label>
    <Select
      name="department"
      id="department"
      value={{ value: formData.department, label: formData.department }}
      options={[
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' },
      ]}
      onChange={(selectedOption) => handleSelectChange(selectedOption, 'department')}
      placeholder="Select a department"
    />
    {formErrors.department && <p className="error-message">{formErrors.department}</p>}
  </div>
);

export default Department;
