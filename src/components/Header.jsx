import React from 'react'
import { IoMoonOutline } from "react-icons/io5";



function Header() {
  return (
    <>
  
     <div className=" shadow-lg py-5">
        <div className=" container mx-auto flex justify-between">
          <h1 className=' py-2 flex gap-3 text-3xl text-black font-bold '>Where in the world?</h1>
          <p className='flex gap-3 '>
      
          
          <IoMoonOutline className='pt-1 text-2xl h' />
            Dark Mode</p>
        </div>
        </div>
    
    </>
  )
}


export default Header