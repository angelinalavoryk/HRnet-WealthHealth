import React from 'react';
import './_NotFound.scss'; 

const NotFound = () => {
  return (
    <div className='page-404'> 
        <div className='page404-container'>
        <h1 className='page-404-h1'>404 - Page Not Found</h1>
        <p className='page-404-txt'>The page you are looking for does not exist.</p>
        </div>
    </div>
  );
};

export default NotFound;