import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/globel.svg'

const leftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-Links' activeClass='active' style={{paddingLeft: "40px"}}>
          <p>Home</p>
        </NavLink>
<div className='side-nav-div'>
  <div><p>PUBLIC</p></div>
  <NavLink to='/Question' className='side-nav-Links'>
    <img src={Globe} alt="Globe" />
    <p style={{paddingLeft:"10px"}}>Questions</p>
  </NavLink>
  <NavLink to='/Tags' className='side-nav-Links' activeClass='active' style={{paddingLeft: "40px"}}> 
<p>Tags</p>
  </NavLink>
  <NavLink to='/Users' className='side-nav-Links' activeClass='active' style={{paddingLeft: "40px"}}> 
<p>Users</p>
  </NavLink>
</div>
      </nav>
      
    </div>
  )
}

export default leftSidebar
