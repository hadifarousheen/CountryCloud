import { useContext } from "react";
import CountryContext from "../utils/CountyContext";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
import Search from "./Search";

const Body=()=>{
    const {countryData}=useContext(CountryContext);
    return(
        <div className="pt-6 bg-gray-300 h-max">
        <Search/>
        <div className="  flex flex-wrap gap-10 justify-center mt-6">
            {countryData?.map((country)=>{
               return <Link to={`/country/${country.name.common}`} state={{country:country}} ><CountryCard data={country} key={country?.flags?.png}/></Link>
            })}
        </div>
        </div>
    )
}

export default Body;