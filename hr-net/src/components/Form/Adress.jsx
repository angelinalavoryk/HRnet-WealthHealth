// AddressInput.jsx
import React from 'react';

const Address = ({ formData, handleInputChange, formErrors }) => (
  <fieldset className="address">
    <legend>Address</legend>
    <div className="first-last-name-div">
      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        name="street"
        value={formData.street}
        onChange={handleInputChange}
      />
      {formErrors.street && <p className="error-message">{formErrors.street}</p>}
    </div>
    <div className="container-adresse-city-zip">
      <div className="first-last-name-div">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        {formErrors.city && <p className="error-message">{formErrors.city}</p>}
      </div>
      <div className="first-last-name-div">
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="number"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleInputChange}
        />
        {formErrors.zipCode && <p className="error-message">{formErrors.zipCode}</p>}
      </div>
    </div>
    <label htmlFor="state" className="state-label">
      State
    </label>
    
    {formErrors.state && (
      <p className="error-message">{formErrors.state}</p>
    )}
  </fieldset>
);

export default Address;
