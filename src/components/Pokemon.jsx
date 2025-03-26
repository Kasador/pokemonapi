import { useState, useEffect } from 'react';
import PokemonService from '../services/PokemonService';
import { FaArrowAltCircleUp, FaArrowCircleDown  } from "react-icons/fa"; // import arrows from react-icons - npm install react-icons

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
        <>
            <h1 className='pokemon-search-title'>Select a Pokemon</h1>
            <FaArrowAltCircleUp className='arrow-up' />
            <FaArrowCircleDown className='arrow-down' />
            <span className='pokemon-scroll-title'>Use the mouse wheel to scroll </span>
            <div className='pokemon-search-container'>
                {pokemonData && ( // this checks to if if the data is fetched before rendering the components
                    <ol>
                        {pokemonData.results.map((pokemon) => (
                            <button key={pokemon.name}>
                                <li 
                                    key={pokemon.name} 
                                    value={pokemon.name} 
                                    onClick={() => {console.log(pokemon.name)}}>{pokemon.name}</li>
                            </button>
                        ))}
                    </ol>
                )}
            </div>
        </>
    )
}

export default Pokemon;
