import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>



      <ul className="nav justify-content-center bg-dark">
        <li className='nav-item'>
          <Link className="nav-link active text-white " to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link className="nav-link text-white" to='/aboutUs'>AboutUs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/register'>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/recycle'>Recycle</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/clothes'>Clothes</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar;
