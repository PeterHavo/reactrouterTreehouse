import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
  
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
                    <NavLink className="navbar-brand" exact to="/eng">Eng</NavLink>

          <NavLink className="navbar-brand" exact to="/" activeStyle={{background:'#A8DADC'}}>Kempelenove Muzeum </NavLink>
          
        </div>
        <ul className="nav navbar-nav">
         
          <li ><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/parnyStroj" activeStyle={{background:'#00c4cc'}}>Kempelen Parny Stroj</NavLink></li>
          <li><NavLink to="/pismo" activeStyle={{background:'#B2DBBF'}}>Kempelen Pismo pre Slepych</NavLink></li>
          <li><NavLink to="/hovoriacaMasina" activeStyle={{background:'#FF1654'}}>Kempelen Hovoriaca masina</NavLink></li>
          {/*<li><NavLink to="/test" activeStyle={{background:'#00c4cc'}}>Test</NavLink></li>*/}

        </ul>
      </div>
    </nav>
 
);







 export default Header;