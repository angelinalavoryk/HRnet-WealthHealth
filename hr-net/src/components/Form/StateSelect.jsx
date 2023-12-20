import React from 'react';
import Select from 'react-select';

const StateSelect = ({ formData, handleSelectChange, stateOptions, formErrors }) => (
  <Select
    name="state"
    id="state"
    className="state-select"
    value={{ value: formData.state, label: formData.state }}
    options={stateOptions}
    onChange={(selectedOption) => handleSelectChange(selectedOption, 'state')}
    placeholder="Select a state"
  />
);

export default StateSelect;
