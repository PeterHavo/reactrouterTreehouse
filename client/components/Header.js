import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
  
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
                    <NavLink className="navbar-brand" exact to="/eng">Eng</NavLink>

          <NavLink className="navbar-brand" exact to="/" activeStyle={{background:'#A8DADC'}}>Kempelen Muzeum </NavLink>
          
        </div>
        <ul className="nav navbar-nav">
         
          <li ><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about" activeStyle={{background:'#00c4cc'}}>About</NavLink></li>
          <li><NavLink to="/teachers" activeStyle={{background:'#B2DBBF'}}>Teachers</NavLink></li>
          <li><NavLink to="/courses" activeStyle={{background:'#456990'}} id="test">Courses</NavLink></li>
          {/*<li><NavLink to="/test" activeStyle={{background:'#00c4cc'}}>Test</NavLink></li>*/}

        </ul>
      </div>
    </nav>
 
);







 export default Header;