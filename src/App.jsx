import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Nav from "./Nav";

import Search from "./Search";


const App = () => {
    return (<>
        <Nav/>
        <Switch>
            <Route exact path='/' render={()=>{return<About name='About'/>}}  />
            <Route exact path='/contact' render={()=>{return<Contact name='Contact'/>}}  />
            
           
            <Route path='/search' component={Search} />
           
            <Route component={Error}/>
        </Switch>
    </>)
}
export default App;