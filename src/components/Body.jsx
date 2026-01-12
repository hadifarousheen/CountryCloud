import { useContext, useState } from "react";
import CountryContext from "../utils/CountyContext";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

const Body=()=>{
    const {countryData,setCountryData,fixedCountryData}=useContext(CountryContext);
    const[searchCountry,setSearchCountry]=useState("");
    return(
        <div className="pt-6 bg-gray-300">
        <div className="flex justify-center">
            <input type="text" value={searchCountry} className="border w-1/3 px-1 font-black border-2" onChange={(e)=>{
                setSearchCountry(e.target.value)
            }}/>
            <button className=" px-2 ml-2 rounded-lg font-bold shadow-md bg-amber-300" onClick={()=>{
             const resultCountry=fixedCountryData?.filter((country)=>{return country.name.common.toLowerCase()==searchCountry.toLowerCase()});
             setCountryData(resultCountry)
            }}>Search</button>

             <button className=" px-2 ml-2 rounded-lg font-bold shadow-md bg-amber-300" onClick={()=>{
             setCountryData(fixedCountryData)
            }}>Get All Countries</button>
        </div>
        <div className="  flex flex-wrap gap-10 justify-center mt-6">
            {countryData?.map((country)=>{
               return <Link to={`/country/${country.name.common}`} state={{country:country}} ><CountryCard data={country} key={country?.flags?.png}/></Link>
            })}
        </div>
        </div>
    )
}

export default Body;