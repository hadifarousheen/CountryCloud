import { useLocation } from 'react-router-dom'
const CountryDetails=()=>{
      const location = useLocation();
      const country = location.state?.country;
      console.log(country)
    return(
        <div className='w-3/4 flex ml-auto mr-auto    mt-8 bg-gray-300'>
           {/* <div className='flex justify-center'> */}
                <div className='w-fit '>
            <img src={country?.flags.png} className='h-fit w-3xl'/>
            </div>
            <div className='w-2/3 py-2 pl-4'>
            <h1 className='text-2xl font-bold mt-[-10px] '>{country?.name?.common}</h1>
            <p className='text-xl'>{country?.flags?.alt}</p>
            <h2 className='text-lg'><span className='font-bold'>Official Name :</span> {country?.name?.official}</h2>
            <h2 className='text-lg'><span className='font-bold'>Common Native Name :</span> {country?.name?.nativeName?.dzo?.common}</h2>
            <h2 className='text-lg'><span className='font-bold'>Official Native Name : </span>{country?.name?.nativeName?.dzo?.official}</h2>
            </div>
            </div>
            // </div>
            
    )
}
export default CountryDetails;