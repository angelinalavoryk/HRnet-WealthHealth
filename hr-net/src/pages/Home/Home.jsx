import React from 'react';
import './_Home.scss';
const Home = () => {
  return (
    <div className='home'>
        <div className='modale'>

            <div className="title">
                <h1 className='add-employee-title'>New employee creation form</h1>
            </div>

      <div className="container">

        <h2 className='add-employee-h2'>
            <span className='employee-add-emoji'>🧑‍💼</span> 
            Add new employee
        </h2>

        <form action="#" id="create-employee">

            <div className='first-last-name'>
                <div className='first-last-name-div'> 
                    <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" />
                </div>
                <div className='first-last-name-div'> 
                    <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" />
                </div>
            </div>

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" />

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <div className='zip-state-div'>
                <div className='zip-state-position-div'>
                <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
                    
                </div>
                <div className='zip-state-position-div'> 
                    <label htmlFor="state">State</label>
                    <select name="state" id="state" className='state'></select>
                </div>
            </div>
            <label htmlFor="city">City</label>
                    <input id="city" type="text" />  
          </fieldset>

          <label htmlFor="department" className='department'>Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button className='button-save'>Save</button>
      </div>
      {/* <div id="confirmation" className="modal">
        Employee Created!
      </div> */}
        </div>
    </div>
  );
};

export default Home;