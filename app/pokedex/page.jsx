"use client";
import { useState, useEffect } from 'react'
import PokemonDetail from "@/components/PokemonDetail"
const API_URL = "https://pokeapi.co/api/v2/pokemon/"
export default function Pokedex() {

    const [pokeList, setPokeList] = useState([]) // Lista de pokemones
    const [currentPokemon, setCurrentPokemon] = useState({}) // Pokemon actual
    const [index, setIndex] = useState(0)

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log("pokeList", data)
                setPokeList(data.results)
            })
    }, [])

    const fetchPokemon = async (url) => {
        // Hacemos una petición a la API de pokemon para obtener los datos del pokemon

        console.log("fetching pokemon", url)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setCurrentPokemon(data)
    }

    useEffect(() => { // Hook De React
        // Escuchamos los cambios en el índice y en la lista de pokemones
        // Y si hay un cambio, actualizamos el pokemon actual
        if (pokeList[index]) {
            setCurrentPokemon(null)
            fetchPokemon(pokeList[index].url)
        }
    }, [index, pokeList])


    return (
        <div className="flex gap-4">
            <button onClick={() => setIndex(index - 1)} className="bg-purple-300 p-8 rounded-xl hover:bg-purple-400">
                ⬅️
            </button>
            <PokemonDetail currentPokemon={currentPokemon} />
            <button onClick={() => setIndex(index + 1)} className="bg-purple-300 p-8 rounded-xl hover:bg-purple-400">
                ➡️
            </button>

        </div>
    )
}


