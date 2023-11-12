// import React from 'react';
// import { Link } from 'react-router-dom';
// import './_SideBar.scss';

// function AsideNav() {
//   return (
   
//     <aside className="sidebar">
//   <nav>
//     <ul>
//       <li>
//         <Link to="/"> 
//         <div className='link-employee'> 
//         <span className="emoji-employee">👔</span> 
//         <p className='txt-employee'> Create Employee</p> 
//         </div>
//         </Link>
        
//       </li>
//       <li>
//         <Link to="/employees">
//           <div className='link-employee'>
//             <span className="emoji-employee">👩‍💼</span>
//             <p className='txt-employee'>List Employees</p> 
//           </div> 
//         </Link>
//       </li>
//     </ul>
//   </nav>
// </aside>

//   );
// }

// export default AsideNav;

import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importez useLocation de react-router-dom
import './_SideBar.scss';

function AsideNav() {
  const location = useLocation(); // Obtenez l'objet location de React Router

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'link-employee active' : 'link-employee'}>
              <span className="emoji-employee">➕</span>
              <p className='txt-employee'>Create Employee</p>
            </Link>
          </li>
          <li>
            <Link to="/employees" className={location.pathname === '/employees' ? 'link-employee active' : 'link-employee'}>
              <span className="emoji-employee">👩‍💼</span>
              <p className='txt-employee'>List Employees</p>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default AsideNav;
