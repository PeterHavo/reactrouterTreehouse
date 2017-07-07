import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import CoursesContainer from './courses/CoursesComponent';
import { HTMLCourses, CSSCourses, JSCourses} from '../data/courses';

import Test from './courses/Test';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink  to={`${match.url}/html` } >Hovoriaca masina video</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>Hovoriaca masina interaktivna fotka</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>Hovoriaca masina a spolocnost</NavLink></li>
        <li><NavLink to={`${match.url}/test`}>Testovanie hovoriacej masiny</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    {/*<Redirect to="/courses/html"/>*/}
    {/*<Route exact path="/courses/" render={()=> <Redirect to="/courses/html"/>}/>
    <Route path="/courses/html" render={ ( )=> {return <HTML/>}}/>*/}

    <Route exact path={`${match.path}`} render={()=> <Redirect to={`${match.path}/html`}/>}/>
    <Route path={`${match.path}/html`} render={ ( )=> {return <CoursesContainer data={ HTMLCourses}/>}}/>
    <Route path={`${match.path}/css`} render={ ( )=> {return <CoursesContainer data={CSSCourses}/>}}/>
    <Route path={`${match.path}/javascript`} render={ ( )=> {return <CoursesContainer data ={JSCourses}/>}}/>
    <Route path={`${match.path}/test`} component={Test}/>

  </div>
);

export default Courses;

