import React from 'react';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';
//import {browserHistory} from 'react-router'; 


import Home from './Home';
import About from './About';
import Header from './Header';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

class App extends React.Component{
  constructor(props){
      super(props);
  }
 


   render () {
    return (< BrowserRouter>
   
    <div className="container-fluid" >
            <Header/>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" render={()=> <About title="About "/>} />
            <Route exact path="/teachers" component={Teachers} />
            <Route path="/pismo/:topic/:name" component={Featured} />
                {/*<Route path="/teachers/:name" render={()=> <Featured/>} />*/}
            <Route path="/courses" component={Courses} />
            <Route component={NotFound} />
            </Switch>
       
   </div>
        </BrowserRouter>
      
        )
   }
    
  
        
}

export default App;