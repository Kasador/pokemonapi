import { useState, useEffect } from 'react';
import PokemonService from '../services/PokemonService';
import { FaArrowAltCircleUp, FaArrowCircleDown  } from "react-icons/fa"; // import arrows from react-icons - npm install react-icons
import axios from 'axios';

const Pokemon = () => {
    const [pokemonData, setPokemonData] = useState(null); // setup the state to save the data
    const [pokemonInfo, setPokemonInfo] = useState(null);
    const [loadedPokemon, setLoadedPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const fetchPokemon = await PokemonService();
                setPokemonData(fetchPokemon);
                setLoadedPokemon(true);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchPokemonData();
    }, []);

    const getPokemonDataByName = async(name) => {
        setLoadedPokemon(false); // load a different pokemon
        console.log('You clicked: ', name);

        let pokemonName = name;
        // let pokemonNamesDataArray = pokemonData.pokemons.results;
        const getPokiByName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const getPokemonInfo = getPokiByName.data;

        console.log('..and here is the data: ', getPokemonInfo);

        setPokemonInfo(getPokemonInfo);

        // const findPokemonInfo = pokemonNamesDataArray.find(pokemon => pokemon.name === pokemonName);

        // console.log(findPokemonInfo);
        // setPokemonInfo(findPokemonInfo);

        // const fetchPokemonInfo = fetchPokemonByName(findPokemonInfo.name);
        // console.log('You clicked: ', fetchPokemonInfo);
    }

    // const fetchPokemonByName = (name) => {
    //     const resTwo = axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    //     const pokemonInfo = resTwo.data;

    //     console.log('clicked named: ', pokemonInfo);

    // //    const pokemonData = {
    // //         "pokemons": fetchPokemon,
    // //         "pokemon": pokemonInfo
    // //    };

    //    console.log(pokemonData);
    //    return pokemonInfo;
    // }

    return (
        <>
            <h1 className='pokemon-search-title'>Select a Pokemon</h1>
            <FaArrowAltCircleUp className='arrow-up' />
            <FaArrowCircleDown className='arrow-down' />
            <span className='pokemon-scroll-title'>Use the mouse wheel to scroll </span>
            <div className='pokemon-search-container'>
                {pokemonData && ( // this checks to if if the data is fetched before rendering the components
                <div>
                    <ol>
                        {pokemonData.pokemons.results.map((pokemon) => (
                            <button key={pokemon.name}>
                                <li 
                                    key={pokemon.name} 
                                    value={pokemon.name} 
                                    onClick={() => {
                                        getPokemonDataByName(pokemon.name);
                                    }}>{pokemon.name}</li>
                            </button>
                        ))}
                    </ol>
                </div>
                )}
            </div>|
            {pokemonInfo && (
            <div className='pokemon-info-container'>
                <section>
                    <img src={pokemonData.pokemon.sprites.front_default} alt={pokemonData.pokemon.name} />
                    <h1>{pokemonData.pokemon.name}</h1>
                </section>
                <h2>Height: {pokemonInfo.height}</h2>
                <h2>Weight: {pokemonInfo.weight}</h2>
                <h2>Base Experience: {pokemonInfo.base_experience}</h2>
                <h2>Abilities: {pokemonInfo.abilities.map((ability) => ability.ability.name).join(', ')}</h2>
                <h2>Types: {pokemonInfo.types.map((type) => type.type.name).join(', ')}</h2>
                <h2>Stats: {pokemonInfo.stats.map((stat) => stat.stat.name).join(', ')}</h2>
            </div>)}
            {loadedPokemon && (
            <div className='pokemon-info-container'>
                <section>
                    <img src={pokemonData.pokemon.sprites.front_default} alt={pokemonData.pokemon.name} />
                    <h1>{pokemonData.pokemon.name}</h1>
                </section>
                <article>
                    <h2>Height: {pokemonData.pokemon.height}</h2>
                    <h2>Weight: {pokemonData.pokemon.weight}</h2>
                    <h2>Base Experience: {pokemonData.pokemon.base_experience}</h2>
                    <h2>Abilities: {pokemonData.pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</h2>
                    <h2>Types: {pokemonData.pokemon.types.map((type) => type.type.name).join(', ')}</h2>
                    <h2>Stats: {pokemonData.pokemon.stats.map((stat) => stat.stat.name).join(', ')}</h2>
                </article>
            </div>)}
        </>
    )
}

export default Pokemon;
