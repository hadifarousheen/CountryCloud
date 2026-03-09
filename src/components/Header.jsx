import { useContext } from "react";
import { Link } from "react-router-dom";
import CountryContext from "../utils/CountyContext";

const Header=()=>{
    const{showHome,setShowHome}=useContext(CountryContext)
    return(
        <div className="bg-red-600 text-white p-2 shadow-lg flex justify-between">
            <h1 className="font-bold text-3xl tracking-wider hover:text-black hover:bg-amber-400 rounded-lg px-1 cursor-pointer ">CountryCloud</h1>
            <nav className="mt-auto mb-auto">
               {showHome && <Link to="/"> <button className="cursor-pointer font-bold text-xl hover:text-black hover:bg-amber-400 rounded-lg px-1" onClick={()=>{
                setShowHome(prev=>!prev)
               }}>Home</button></Link>}
            </nav>
        </div>
    )
}

export default  Header;