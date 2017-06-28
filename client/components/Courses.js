import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JavaScript from './courses/JavaScript';
import Test from './courses/Test';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
        <li><NavLink to={`${match.url}/test`}>Test</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    {/*<Redirect to="/courses/html"/>*/}
    {/*<Route exact path="/courses/" render={()=> <Redirect to="/courses/html"/>}/>
    <Route path="/courses/html" render={ ( )=> {return <HTML/>}}/>*/}

    <Route exact path={`${match.path}`} render={()=> <Redirect to={`${match.path}/html`}/>}/>
    <Route path={`${match.path}/html`} render={ ( )=> {return <HTML/>}}/>
    <Route path={`${match.path}/css`} component={CSS}/>
    <Route path={`${match.path}/javascript`} component={JavaScript}/>
    <Route path={`${match.path}/test`} component={Test}/>

  </div>
);

export default Courses;

