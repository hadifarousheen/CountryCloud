const CountryCard=({data})=>{
    
    const{flags,name}=data;
    return(
        <div className="">
           
               
                <img src={flags?.png} className="h-60 w-96"/>
                <h1>{name?.official}</h1>
            
        </div>
    )
}

export default CountryCard;