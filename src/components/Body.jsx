import { useContext } from "react";
import CountryContext from "../utils/CountyContext";
import CountryCard from "./CountryCard";

const Body=()=>{
    const {countryData}=useContext(CountryContext);
    return(
        <div className=" h-screen flex flex-wrap gap-10 justify-center mt-6">
            {countryData?.map((country)=>{
               return <CountryCard data={country} key={country?.flags?.png}/>
            })}
        </div>
    )
}

export default Body;