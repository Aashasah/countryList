
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AllCountries() {

  const [countries, setCountries]=useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((response)=> response.json())
    .then((data)=> setCountries(data))
    .catch((erroe)=>console.error("fetching error", erroe))
  },[])
  return (
   <>
   <article className='flex  flex-wrap gap-10'>
    {countries.map((list, index)=>(
  <div className=' w-[450px] mx-auto shadow-2xl rounded-2xl  h-[350px] px-2 hover:transition-all duration-200 hover:translate-x-4  overflow-hidden' key={index}>
    <div className=''>
    <Link to={`/${list.name.common}`}>
    <img className='w-full object-cover h-[200px] rounded' src={list.flags.svg} alt="" />
    </Link>
    </div>
<div className='font-bold px-2 m-2'>
  <h2>{list.name.common}</h2>
</div>
<ul className='px-2 m-2 py-2'>
  <li>Population: {list.population}</li>
  <li>Region: {list.region}</li>
  <li>Capital: {list.capital}</li>
</ul>
</div>

    ))}
 
   </article>
  
   </>
  )
}

export default AllCountries
