import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import CountryContext from './utils/CountyContext.js'
import { useEffect, useState } from "react"



function App() {
  const[countryData,setCountryData]=useState(null);
  const[fixedCountryData,setFixedCountryData]=useState(null);
  useEffect(()=>{
   const getCountryData=async()=>{
    const data= await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
const dataJson= await data.json();
// console.log(dataJson)
setCountryData(dataJson)
setFixedCountryData(dataJson);
   }
   getCountryData();
  },[])
  return (
    <>
     <CountryContext.Provider value={{countryData,setCountryData,fixedCountryData,setFixedCountryData}}>
    <Header/>
    <Outlet/>
    </CountryContext.Provider>
    </>
  )
}

export default App;
