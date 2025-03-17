"use client";
import { useState, useEffect } from 'react'

const API_URL = "https://pokeapi.co/api/v2/pokemon/"
export default function Pokedex() {

    const [pokeList, setPokeList] = useState([] as any[]) // Lista de pokemones
    const [currentPokemon, setCurrentPokemon] = useState({} as any) // Pokemon actual
    const [index, setIndex] = useState(0)

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setPokeList(data.results)
            })
    }, [])

    const fetchPokemon = async (url: string) => {
        // Hacemos una petición a la API de pokemon para obtener los datos del pokemon
        const response = await fetch(url)
        const data = await response.json()
        setCurrentPokemon(data)
    }

    useEffect(() => {
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
            <div className="bg-blue-200 p-8 rounded-xl">
                {currentPokemon ?
                    <div className='text-center'>
                        <div className='flex gap-4'>
                            <div className='h-20 w-20 bg-red-300 rounded-full'>
                                <img src={currentPokemon.sprites?.front_default} alt="pokemon" />
                            </div>
                            <div className='h-20 w-20 bg-red-300 rounded-full'>
                                <img src={currentPokemon.sprites?.back_default} alt="pokemon" />
                            </div>
                        </div>
                        <div>Altura: {currentPokemon.height}</div>
                        <div>Peso: {currentPokemon.weight}</div>
                    </div>
                    :
                    <div>
                        Cargando...
                    </div>
                }
                <h2 className="text-xl text-center font-bold">
                    {pokeList[index]?.name}</h2>
            </div>
            <button onClick={() => setIndex(index + 1)} className="bg-purple-300 p-8 rounded-xl hover:bg-purple-400">
                ➡️
            </button>

        </div>
    )


}


