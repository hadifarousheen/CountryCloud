import { useContext } from "react";
import CountryContext from "../utils/CountyContext";

const CountryCard = ({ data }) => {
    const { flags, name } = data;
    const{setShowHome}=useContext(CountryContext)
    return (
        <div onClick={()=>{setShowHome(prev=>!prev)}} >
            <img src={flags?.png} className="h-60 w-96" />
            <h1 className="font-bold text-lg">{name?.common}</h1>
        </div>
    )
}

export default CountryCard;