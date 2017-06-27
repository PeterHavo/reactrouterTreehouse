import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
  
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink className="navbar-brand" to="/">React App</NavLink>
        </div>
        <ul className="nav navbar-nav">
          <li ><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/teachers">Teachers</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
        </ul>
      </div>
    </nav>
 
);







 export default Header;