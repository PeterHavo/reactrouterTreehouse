import React from 'react';

const Header = (props) => (
  
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">React App</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Teachers</a></li>
          <li><a href="#">Courses</a></li>
        </ul>
      </div>
    </nav>
 
);




export default Header;