import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
  
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink className="navbar-brand" exact to="/" activeStyle={{background:'skyblue'}}>React App</NavLink>
        </div>
        <ul className="nav navbar-nav">
          <li ><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about" activeStyle={{background:'#00c4cc'}}>About</NavLink></li>
          <li><NavLink to="/teachers" activeStyle={{background:'#00c4cc'}}>Teachers</NavLink></li>
          <li><NavLink to="/courses" activeStyle={{background:'#00c4cc'}}>Courses</NavLink></li>
        </ul>
      </div>
    </nav>
 
);







 export default Header;