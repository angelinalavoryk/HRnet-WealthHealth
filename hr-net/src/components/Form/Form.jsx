import React, { useState } from 'react';
import './_Form.scss';
import logo from '../../images/logo.png';
import employees from '../../images/employees.png';
import { states } from '../../data/states.js';
import { validateForm } from '../../hooks/FormValidation.jsx'; 

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: 'Sales',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      console.log('Formulaire valide, envoyez les données :', formData);
      setFormErrors({});
    } else {
      console.log('Le formulaire comporte des erreurs.');
      setFormErrors(errors);
    }
  };

  return (
    <div className='bg'>
      <div className='modale'>
        <div className='title'>
          <img src={logo} alt='logo' className='logo-home-form' />
          <h1 className='add-employee-title'>New employee form</h1>
        </div>
        <div className='container'>
          <h2 className='add-employee-h2'>
            <img src={employees} alt='' className='employee-add-emoji' />
            Please complete the form to add a new employee
          </h2>
          <form action='#' id='create-employee' onSubmit={handleSubmit}>
            <div className='first-last-name'>
              <div className='first-last-name-div'>
                <label htmlFor='first-name'>First Name</label>
                <input
                  type='text'
                  id='first-name'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {formErrors.firstName && (
                  <p className='error-message'>{formErrors.firstName}</p>
                )}
              </div>
              <div className='first-last-name-div'>
                <label htmlFor='last-name'>Last Name</label>
                <input
                  type='text'
                  id='last-name'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <p className='error-message'>{formErrors.lastName}</p>
                )}
              </div>
            </div>
            <label htmlFor='date-of-birth'>Date of Birth</label>
            <input
              id='date-of-birth'
              type='text'
              name='dateOfBirth'
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
            {formErrors.dateOfBirth && (
              <p className='error-message'>{formErrors.dateOfBirth}</p>
            )}
            <label htmlFor='start-date'>Start Date</label>
            <input
              id='start-date'
              type='text'
              name='startDate'
              value={formData.startDate}
              onChange={handleInputChange}
            />
            {formErrors.startDate && (
              <p className='error-message'>{formErrors.startDate}</p>
            )}
            <fieldset className='address'>
              <legend>Address</legend>

              <label htmlFor='street'>Street</label>
              <input
                id='street'
                type='text'
                name='street'
                value={formData.street}
                onChange={handleInputChange}
              />
              {formErrors.street && (
                <p className='error-message'>{formErrors.street}</p>
              )}

              <label htmlFor='city'>City</label>
              <input
                id='city'
                type='text'
                name='city'
                value={formData.city}
                onChange={handleInputChange}
              />
              {formErrors.city && (
                <p className='error-message'>{formErrors.city}</p>
              )}
            <div className='zip-state-div'>
            <div className='zip-state-position-div'>
              <label htmlFor='zip-code'>Zip Code</label>
              <input
                id='zip-code'
                type='number'
                name='zipCode'
                value={formData.zipCode}
                onChange={handleInputChange}
              />
              {formErrors.zipCode && (
                <p className='error-message'>{formErrors.zipCode}</p>
              )}
            </div>

            <div className='zip-state-position-div'>
              <label htmlFor='state' className='state-label'>
                State
              </label>
              <select
                name='state'
                id='state'
                className='state'
                value={formData.state}
                onChange={handleInputChange}
              >
                <option value=''>Select an option</option>
                {states.map((state) => (
                  <option key={state.abbreviation} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
              {formErrors.state && (
                <p className='error-message'>{formErrors.state}</p>
              )}
            </div>
          </div>
            </fieldset>

            <label htmlFor='department' className='department'>
              Department
            </label>
            <select
              name='department'
              id='department'
              value={formData.department}
              onChange={handleInputChange}
            >
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
            {formErrors.department && (
              <p className='error-message'>{formErrors.department}</p>
            )}
            <button type='submit' className='button-save'>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;



