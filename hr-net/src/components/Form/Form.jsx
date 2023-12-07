import React, { useState } from 'react';
import './_Form.scss';
import logo from '../../images/logo.png';
import employees from '../../images/employees.png';
import { states } from '../../data/states.js';
import { validateForm } from '../../hooks/FormValidation.jsx'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-dropdown-select';
import { Modale } from "modal-react-lib-projet-14"; 


const Form = () => {
  const handleSelectChange = (selected, name) => {
    const selectedValue = selected[0] || '';
    setFormData({
      ...formData,
      [name]: selectedValue.value,
    });
  };

  const stateOptions = states.map((state) => ({
    value: state.name,
    label: state.name,
  }));

  const departmentOptions = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' },
  ];

  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
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

  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

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
      
      // Sauvegarde des données dans le stockage local
      const employeesData = JSON.parse(localStorage.getItem('employees')) || [];
      employeesData.push(formData);
      localStorage.setItem('employees', JSON.stringify(employeesData));
      
      // Afficher la confirmation
      setIsConfirmationVisible(true);
    } else {
      console.log('Le formulaire comporte des erreurs.');
      setFormErrors(errors);
    }
  };

  const handleCloseConfirmation = () => {
    // Masquer la confirmation et réinitialiser le formulaire
    setIsConfirmationVisible(false);
    setFormData({
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
            <DatePicker
              selected={formData.dateOfBirth}
              onChange={(date) => handleDateChange(date, 'dateOfBirth')}
              dateFormat='MM/dd/yyyy'
              id='date-of-birth'
              name='dateOfBirth'
            />
            {formErrors.dateOfBirth && (
              <p className='error-message'>{formErrors.dateOfBirth}</p>
            )}
            <label htmlFor='start-date'>Start Date</label>
            <DatePicker
              selected={formData.startDate}
              onChange={(date) => handleDateChange(date, 'startDate')}
              dateFormat='MM/dd/yyyy'
              id='start-date'
              name='startDate'
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
                  <Select
                    name='state'
                    id='state'
                    value={formData.state}
                    options={stateOptions}
                    onChange={(selected) =>
                      handleSelectChange(selected, 'state')
                    }
                    placeholder="Select a state"
                  />
                  {formErrors.state && (
                    <p className='error-message'>{formErrors.state}</p>
                  )}
                </div>
              </div>
            </fieldset>
            <div className='department'>
              <label htmlFor='department'>Department</label>
              <Select
                name='department'
                id='department'
                value={formData.department}
                options={departmentOptions}
                onChange={(selected) =>
                  handleSelectChange(selected, 'department')
                }
                placeholder="Select a department"
              />
              {formErrors.department && (
                <p className='error-message'>{formErrors.department}</p>
              )}
            </div>
            <button type='submit' className='button-save'>
              Save
            </button>
          </form>
          {isConfirmationVisible && (
            <div className="overlay">
              <Modale
                showModal={isConfirmationVisible}
                closeModal={handleCloseConfirmation}
                message="Employee Created !"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;

