export const validateForm = (formData) => {
  const errors = {};
  const validationRules = {
    firstName: 'Please enter a first name.',
    lastName: 'Please enter a last name.',
    dateOfBirth: 'Please enter a date of birth.',
    startDate: 'Please enter a start date.',
    street: 'Please enter a street address.',
    city: 'Please enter a city.',
    state: 'Please select a state.',
    zipCode: 'Please enter a zip code.',
    department: 'Please select a department.',
  };

  for (const field in validationRules) {
    if (field === 'dateOfBirth' || field === 'startDate') {
      if (formData[field] === null) {
        errors[field] = validationRules[field];
      }
    } else if (typeof formData[field] !== 'string' || formData[field].trim() === '') {
      errors[field] = validationRules[field];
    }
  }

  return errors;
};
  
  
