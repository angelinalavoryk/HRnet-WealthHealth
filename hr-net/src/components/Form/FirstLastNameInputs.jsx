// FirstNameLastNameInputs.jsx
import React from 'react';

const FirstLastNameInputs = ({ formData, handleInputChange, formErrors }) => (
  <div className="first-last-name">
    <div className="first-last-name-div">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      {formErrors.firstName && <p className="error-message">{formErrors.firstName}</p>}
    </div>
    <div className="first-last-name-div">
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      {formErrors.lastName && <p className="error-message">{formErrors.lastName}</p>}
    </div>
  </div>
);

export default FirstLastNameInputs;
