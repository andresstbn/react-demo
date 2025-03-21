"use client";
import { useEffect, useState } from "react";

export default function CountriesPage() {
    const URL_COUNTRIES = "https://restcountries.com/v3.1/all";
    const [countries, setCountries] = useState([]);

    const fetchCountries = async () => {
        const response = await fetch(URL_COUNTRIES);
        const data = await response.json();
        console.table(data)
        setCountries(data);
    };

    useEffect(() => {
        fetchCountries();
    }, []);


    return (
        <div>
            <h1>Countries Page</h1>
            <p>This is the countries page.</p>

            <div className="flex flex-col gap-4">
                {/* {condicion && <></>} */}
                {countries.map((country, index) => (
                    <div key={index} className="bg-blue-200 p-4 rounded-lg shadow-md">
                        <h2>{country.name.common}</h2>
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                    </div>
                ))}
            </div>

        </div>
    );
}