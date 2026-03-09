import { useContext, useState } from "react";
import CountryContext from "../utils/CountyContext";

const Search=()=>{
        const[searchCountry,setSearchCountry]=useState("");
        const {setCountryData,fixedCountryData}=useContext(CountryContext);
    return(
  <div className="flex justify-center">
            <input type="text" value={searchCountry} className="w-1/3 px-1 font-black border-2" onChange={(e)=>{
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
    )
}

export default Search;