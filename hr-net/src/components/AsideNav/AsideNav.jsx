import React from 'react';
import { Link } from 'react-router-dom';
import './_AsideNav.scss';

function AsideNav() {
  return (
   
    <aside className="sidebar">
  <nav>
    <ul>
      <li>
        <Link to="/">Create Employee</Link>
      </li>
      <li>
        <Link to="/employees">List Employees</Link>
      </li>
    </ul>
  </nav>
</aside>

  );
}

export default AsideNav;

