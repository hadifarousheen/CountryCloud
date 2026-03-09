import { useLocation } from 'react-router-dom'
const CountryDetails=()=>{
      const location = useLocation();
      const country = location.state?.country;
    return(
        <div className=' flex ml-auto mr-auto  bg-gray-300 flex-col items-center p-4 h-max'>
                <div className='w-1/2 '>
            <img src={country?.flags.png} className='h-fit w-3xl'/>
            </div>
            <div className='w-1/2 pt-6 '>
            <h1 className='text-2xl font-bold uppercase tracking-wider  '>{country?.name?.common}</h1>
            <p className='text-xl py-2'>{country?.flags?.alt}</p>
            <h2 className='text-lg'><span className='font-bold'>Official Name :</span> {country?.name?.official}</h2>
            <h2 className='text-lg'><span className='font-bold'>Common Native Name :</span> {country?.name?.nativeName?.dzo?.common}</h2>
            <h2 className='text-lg'><span className='font-bold'>Official Native Name : </span>{country?.name?.nativeName?.dzo?.official}</h2>
            </div>
            </div>            
    )
}
export default CountryDetails;