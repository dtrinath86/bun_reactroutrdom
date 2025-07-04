import React from 'react'
import Navbar from '../Navbar'
import { NavLink } from 'react-router-dom'

function Header() {

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About" },
    { name: "Movies", path: "/Movie" },
    { name: "Contact Us", path: "/ContactUs" }
  ]


  return (
    //  <Navbar/>
    <div className='flex justify-between items-center'>
      <div><NavLink to="/" className="p-2 font-bold text-blue-500">Logo</NavLink></div>
      <div className='p-2 flex gap-4'>
        {navItems.map((items)=>{
           return(
           <NavLink key={items.name} to={items.path} className={({isActive})=>`transition-all group relative duration-300 hover:text-blue-400 ${isActive?"text-blue-400 font-bold":"text-black"}`}>

              {({isActive})=>(
                <>
                  {items.name}

              <span className={`absolute bottom-0 left-0 transition-all duration-300 w-0 h-1 bg-blue-400 group-hover:w-full group-hover:text-blue-400 ${isActive&& "w-full"}`}></span>
                </>

              )}


            </NavLink>
            )
        }) }
      </div>
    </div>

  )
}

export default Header
