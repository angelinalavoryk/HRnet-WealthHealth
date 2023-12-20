import { useState } from 'react';

export function useForm(initialState) {
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (selectedOption, name) => {
    const selectedValue = selectedOption ? selectedOption.value : '';
    setFormData({
      ...formData,
      [name]: selectedValue,
    });
  };

  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  const resetForm = () => {
    setFormData(initialState);
    setFormErrors({});
  };

  return {
    formData,
    formErrors,
    handleInputChange,
    handleSelectChange,
    handleDateChange,
    resetForm,
    setFormErrors,
  };
}

