import React, { useState } from 'react';
import './_Form.scss';
import logo from '../../images/logo.png';
import employees from '../../images/employees.png';
import { states } from '../../data/states.js';
import { validateForm } from '../../hooks/FormValidation.jsx'; 
import DatePicker from '../DatePicker/DatePicker.jsx';
// import Select from 'react-dropdown-select';
import { Modale } from "npm-modale-lib-react"; 

import Select from 'react-select';


const Form = () => {
  const handleSelectChange = (selectedOption, name) => {
    const selectedValue = selectedOption ? selectedOption.value : '';
    setFormData({
      ...formData,
      [name]: selectedValue,
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
    state: stateOptions[0].value,
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

            <div className='dates-container'> 
              <div className='container-date-of-birth-and-start-day'> 
                <label htmlFor='date-of-birth'>Date of Birth</label>
                <DatePicker
                  selected={formData.dateOfBirth}
                  onChange={(date) => handleDateChange(date, 'dateOfBirth')}
                />
                {formErrors.dateOfBirth && (
                  <p className='error-message'>{formErrors.dateOfBirth}</p>
                )}
              </div>
              <div className='container-date-of-birth-and-start-day'> 
                <label htmlFor='start-date'>Start Date</label>
                <DatePicker
                  selected={formData.startDate}
                  onChange={(date) => handleDateChange(date, 'startDate')}
                />
                {formErrors.startDate && (
                  <p className='error-message'>{formErrors.startDate}</p>
                )}
              </div>
            </div>

            <div className='department'>
              <label htmlFor='department'>Department</label>
             <Select
                name='department'
                id='department'
                value={{ value: formData.department, label: formData.department }}
                options={departmentOptions.map(option => ({
                  value: option.value,
                  label: option.label
                }))}
                onChange={(selectedOption) =>
                  handleSelectChange(selectedOption, 'department')
                }
                placeholder="Select a department"
              />
              {formErrors.department && (
                <p className='error-message'>{formErrors.department}</p>
              )}
            </div>


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



              <div className='container-adresse-city-zip'> 
                <div className='container-city-zip'> 
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
                </div>
                <div className='container-city-zip'> 
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
                </div>

                <label htmlFor='state' className='state-label'>
                  State
                </label>
                <Select
                  name='state'
                  id='state'
                  value={{ value: formData.state, label: formData.state }}
                  options={stateOptions.map(option => ({
                    value: option.value,
                    label: option.label
                  }))}
                  onChange={(selectedOption) => handleSelectChange(selectedOption, 'state')}
                  placeholder="Select a state"
                />
                {formErrors.state && (
                  <p className='error-message'>{formErrors.state}</p>
                )}
            </fieldset>

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


