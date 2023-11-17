
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import list from '../../images/list.png'
import './_SideBar.scss';

function AsideNav() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'link-employee active' : 'link-employee'}>
              <span className="emoji-employee">➕</span>
              <p className='txt-employee'>Add Employee</p>
            </Link>
          </li>
          <li>
            <Link to="/employees" className={location.pathname === '/employees' ? 'link-employee active' : 'link-employee'}>
              <img src={list} alt="" className='png-employee-list'/>
              <p className='txt-employee'>List Employees</p>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default AsideNav;
