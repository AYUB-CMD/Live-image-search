import React from 'react';
import {NavLink} from 'react-router-dom'
const Nav = () => {
    return (<>
        <div className='menu'>
        <NavLink exact activeClassName='active' to='/contact'>Contact</NavLink>
        <NavLink exact activeClassName='active' to='/search'>Search</NavLink>
        <NavLink exact activeClassName='active' to='/'>About</NavLink>
      </div>
        <br/>
  
    </>)
}
export default Nav;