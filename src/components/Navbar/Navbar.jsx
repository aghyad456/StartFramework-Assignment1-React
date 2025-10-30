import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  const[isScrolled,setScrolled]= useState(false)
  
  useEffect(()=>{
    function handelScroll(){
       if(window.scrollY>0){
        setScrolled(true)
        }else{
           setScrolled(false)
        }
    }
   document.addEventListener('scroll', handelScroll)
  }, [])
  return (
     <nav className={`navbar navbar-expand-lg custom-navbar position-fixed w-100 top-0 left-0  ${isScrolled? 'py-4' : 'py-5'} `}>
      <div className="container">
      < NavLink className="nav-link navbar-brand text-white fw-bold fs-2" to = {""}>START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div cclassName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <NavLink className="nav-link py-2 px-1  text-center" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link py-2 px-1 text-center" to="/portfolio">PORTFOLIO</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link py-2 px-1  text-center" to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
