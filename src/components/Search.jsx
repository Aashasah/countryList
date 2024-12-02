import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";


function Search() {
  const [searchtext, setSearchtext]=useState('')
  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/name/${searchtext}`)
    .then ((res)=> res.json())
    .then ((data)=> setSearchtext(data))
    .catch((error)=>console.error('blaaaa',error))
  },[])
console.log(searchtext)
  function handlesearchcountry(e){
   e.preventDefault()
    setSearchtext()
}
  return (
   <>
     <section className=' flex  justify-between  mt-[15px] container mx-auto pt-[20px]'>
    <form  onSubmit={handlesearchcountry} autoComplete='off' className='text-center text-black '>

    <CiSearch className='text-3xl border-black p-4' />
        <input
       required value={searchtext}
       onChange={(e)=> setSearchtext(e.target.value)}

        className='pl-[10px] pr-[380px] pt-[30px] cursor-pointer pb-[30px] text-black border-4 rounded-2xl shadow-1xl mb-[50px]' type="search" name='search' id='search' placeholder='seacrh for a country' 
        />
      </form>

      <div>
        <select className='   border-4 rounded-lg shadow-xl text-black mb-[50px] select cursor-pointer pl-[20px] container mx-auto pr-[30px] pt-[30px] pb-[30px] ' name="select"  id="select">
          <option value="">Filter by region</option>
          <option value="America">America</option>
          <option value="europe">europe</option>
          <option value="oceania">oceania</option>
          <option value="Africe">Asia</option>
       
          <option value="Africe">Africa</option>
        </select>
      </div>
    </section>
   </>
  )
}

export default Search
