const CountryCard = ({ data }) => {
    const { flags, name } = data;
    return (
        <div >
            <img src={flags?.png} className="h-60 w-96" />
            <h1 className="font-bold text-lg">{name?.common}</h1>
        </div>
    )
}

export default CountryCard;