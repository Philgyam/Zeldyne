import { useState,useEffect } from 'react'
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Items from './ItemsDetails/Items'
import CheckOut from './CheckOut/CheckOut'
import Confirmation from './CheckOut/Confirmation'



const ScrollToTop =()=>{
  const {pathname} = useLocation();
  useEffect(()=>{
     window.scrollTo(0,0)
  },[pathname])
  return null
}

function App() {

  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='item/:itemId' element= {<Items/>}/>
      <Route path='checkout' element= {<CheckOut/>}/>
      <Route path='checkout/succes' element= {<Confirmation/>}/>



    </Routes>
    </BrowserRouter>
     {/* <Home/> */}
    </>
  )
}

export default App
