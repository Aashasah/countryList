
import React, { useState,  useEffect, } from 'react'
import { Link, useParams } from 'react-router-dom';



function CountryInfo() {

  const [country, setCountry]=useState([])
  const {name}=useParams();

  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((res)=> res.json())
    .then((data)=> setCountry(data))
    .catch((error)=>console.error("erroe fetching country data", error))
            },[name])
        console.log(country)
  return (
   <>
   
   <section className='  md:py-0 mx-w-7xl mx-auto w-[80%] h-[500px] '>
{
  country.map((item,index)=>(
   <div className='grid grid-cols-1 gap-16 md:grid-cols-2 md:place-items-center md:h-screen overflow-hidden object-cover' key={index}>
<article>
  <img className='w-full rounded  h-[400px]' src={item.flags.svg} alt="" />
</article>
<article className='overflow-hidden object-cover p-3 '>
  <h1 className=' mb-4 font-bold text-gray-900 text-2xl lg:text-4xl'>{item.name.official}</h1>
  <ul className='mt-6  flex-col font-bold items-center justify-start gap-2   '>
    <li className='my-2'>Native Name: <span>{item.name.common}</span></li>
    <li className='my-2'>Population: <span className='text-gray-600 '> {item.population.toLocaleString()}</span></li>
    <li className='my-2'>Region: <span className='text-gray-600 '> {item.region}</span></li>
    <li className='my-2'>Subregion: <span className='text-gray-600 '> {item.subregion}</span></li>
    <li className='my-2'>Capital: <span className='text-gray-600 '>{item.capital[0]}</span></li>
   
    </ul>

    {item.borders && (
      <>
       <h3 className='text-gray-900 font-bold text-lg mb-2
        dark:text-white'>Borders: </h3>
    <ul className='flex flex-wrap items-start justify-start gap-2 '>
      {item.borders.map((border, index)=>(
<li className='bg-white p-2 rounded text-xs tracking-wide shadow text-gray-700' key={index}>{border}</li>
    ))}
      </ul>
      </>
    )}
    <Link to='/' className='inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-200 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-400  dark:hover:bg-gray-700 '>&larr; Back
    </Link>
   
</article>
   </div> 
  ))}  
   </section>
   </>
  )
}

export default CountryInfo;
