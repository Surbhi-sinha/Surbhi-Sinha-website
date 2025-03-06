import React from 'react'

import { Link } from 'react-router-dom';
import ScrollProgress from "../components/ScrollProgress"

const Navbar = () => {
   return (
      <div>
         <nav className="navbar navbar-expand-lg nav-bgColor custom-Font position-fixed top-0 start-0 w-100 navigation">
            <div className='container-fluid'>
               <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className='navbar-toggler-icon'></span>
               </button>

               <div className='collapse navbar-collapse' id='navbarNav'>
                  <ul className='navbar-nav'>
                     <li className='nav-item'>
                        <Link to="/aboutme" className='nav-link active'>About</Link>
                     </li>

                     <li className='nav-item'>
                        <Link to="/background" className='nav-link'>Background</Link>
                     </li>
                     <li className='nav-item'>
                        <Link to="/skills" className='nav-link'>Skills</Link>
                     </li>
                     <li className='nav-item'>
                        <Link to="/projects" className='nav-link'>Projects</Link>
                     </li>
                     <li className='nav-item'>
                        <Link to="/connect" className='nav-link'>Connect Me</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
         <ScrollProgress/>
      </div>
   )
}

export default Navbar
