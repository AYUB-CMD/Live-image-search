import React from 'react';
import {NavLink} from 'react-router-dom'
const Error = () => {
    
    return (<>
        <h1>Opps something went wrong</h1>
        <p>404 Error</p>
       <NavLink to= '/' className='go'>go back</NavLink>

    </>)
}
export default Error;