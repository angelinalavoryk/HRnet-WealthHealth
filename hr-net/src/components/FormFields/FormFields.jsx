import React from 'react';

const FormFields = ({ label, name, value, onChange, error }) => {
  return (
    <div className={`${name}-div`}>
      <label htmlFor={name}>{label}</label>
      <input
        type='text'
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p className='error-message'>{error}</p>}
    </div>
  );
};

export default FormFields;
