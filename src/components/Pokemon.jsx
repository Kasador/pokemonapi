import { useState, useEffect } from 'react';
import PokemonService from '../services/PokemonService';

const Pokemon = () => {
    const [pokemonData, setPokemonData] = useState(null); // setup the state to save the data

    useEffect(() => {
        const fetchPokemonData = async () => {
            const data = await PokemonService();
            setPokemonData(data); // save the data in the state

        }

        fetchPokemonData();
    }, []);

    return (
        <div>
            <h1>Pokemon Data</h1>
            {pokemonData && ( // this checks to if if the data is fetched before rendering the components
                <ol>
                    {pokemonData.results.map((pokemon) => (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    ))}
                </ol>
            )}
        </div>
    )
}

export default Pokemon;
