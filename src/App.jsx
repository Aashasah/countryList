import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import AllCountries from './components/AllCountries'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CountryInfo from './components/CountryInfo'



function App() {
  return (<>
    <Header/>
<Search/>
<BrowserRouter>

<Routes>
  
  <Route path='/' element={<AllCountries/>}/>
  <Route path='/:name' element={<CountryInfo/>}/>
  </Routes>
  </BrowserRouter>
  </>
  

    





 

  
  )
}

export default App
