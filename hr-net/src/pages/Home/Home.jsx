import React from 'react';
import './_Home.scss';
import logo from '../../images/logo.png';
import employees from '../../images/employees.png';
import { states } from '../../data/states.js';
import { validateForm } from '../../utils/FormValidation.js';
import { Modale } from "npm-modale-lib-react";
import { useEmployeeContext } from '../../utils/EmployeeContext.js';
import { useForm } from '../../utils/useForm'; 
import Department from '../../components/Form/Department';
import FirstLastNameInputs from '../../components/Form/FirstLastNameInputs';
import BirthDateStartDate from '../../components/Form/BirthDateStartDate.jsx';
import Address from '../../components/Form/Adress';
import StateSelect from '../../components/Form/StateSelect.jsx';

const Home = () => {
  const { addEmployee } = useEmployeeContext();
  const [isConfirmationVisible, setIsConfirmationVisible] = React.useState(false);

  const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: states[0].name,
    zipCode: '',
    department: 'Sales',
  };

  // hook personnalisé pour gérer l'état du formulaire
  const {
    formData,
    formErrors,
    handleInputChange,
    handleSelectChange,
    handleDateChange,
    resetForm,
    setFormErrors,
  } = useForm(initialState);

  const stateOptions = states.map((state) => ({
    value: state.name,
    label: state.name,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      // Ajouter l'employé en utilisant le contexte
      addEmployee(formData);
      // Afficher la confirmation
      setIsConfirmationVisible(true);
    } else {
      setFormErrors(errors);
    }
  };

  const handleCloseConfirmation = () => {
    // Masquer la confirmation et réinitialiser le formulaire
    setIsConfirmationVisible(false);
    resetForm();
  };
  return (
    <div className='home'>
      <div className="form-container">
      <div className="modale">
        <div className="title">
          <img src={logo} alt="logo" className="logo-home-form" />
          <h1 className="add-employee-title">New employee form</h1>
        </div>
        <div className="container">
          <h2 className="add-employee-h2">
            <img src={employees} alt="" className="employee-add-emoji" />
            Please complete the form to add a new employee
          </h2>
          <form action="#" id="create-employee" onSubmit={handleSubmit}>

            <FirstLastNameInputs formData={formData} handleInputChange={handleInputChange} formErrors={formErrors} />
            <BirthDateStartDate formData={formData} handleDateChange={handleDateChange} formErrors={formErrors} />
            <Department formData={formData} handleSelectChange={handleSelectChange} formErrors={formErrors} stateOptions={stateOptions} />
            <Address formData={formData} handleInputChange={handleInputChange} formErrors={formErrors} />
            <StateSelect formData={formData} handleSelectChange={handleSelectChange} stateOptions={stateOptions} formErrors={formErrors} />

            <button type="submit" className="button-save">Save</button>
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
    </div>
  );
};

export default Home;



