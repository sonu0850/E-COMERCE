import React from 'react'
import { NavLink } from 'react-router-dom'
import dominos from '../../../assets/dominos.png'

const Navbar = () => {
  return (
   <>
 <div className="container-fluid">
<div className="navbar  flex justify-between px-5 items-center py-3 text-black">
  <div className="logo"><img src={dominos} alt=""  width={130}/></div>
  <div className="content flex gap-3">
    <NavLink to='/'><h2>Home</h2></NavLink>
    <NavLink to='/About'><h2>About</h2></NavLink>
    <NavLink to='/Contact'><h2>Contact Us</h2></NavLink>

  </div>
  <div className="btn flex gap-3">
 <NavLink to='/Login'> <button className='p-1 rounded-xl px-3 text-white  bg-black'>Log In</button></NavLink>
          <NavLink to="/Signup">  <button className='p-1 rounded-xl text-white  bg-black'>Sign Up</button></NavLink>
  </div>
</div>
 </div>
   </> 
   
    
  )
}

export default Navbar
