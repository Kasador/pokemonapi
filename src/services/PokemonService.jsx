import axios from 'axios'; // use axios to handle the fetch request

const PokemonService = async () => { // func to fetch the pokemon data
    try { // try to fetch the data
        const resOne = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000') // the API endpoint
        const allPokemon = resOne.data; // the res from the API

        console.log(allPokemon);

        // get random number
        const randomNumber = Math.floor(Math.random() * allPokemon.results.length);
        let name = allPokemon.results[randomNumber].name;

        const resTwo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemonInfo = resTwo.data;

        console.log('First Loaded Pokemon: ', pokemonInfo);

       const pokemonData = {
            "pokemons": allPokemon,
            "pokemon": pokemonInfo
       };

       console.log(pokemonData);

       return pokemonData;
    } catch (error) { // if there was an error, then we will log it out and throw error 
        console.error('Error fetching the Pokemon data requested:', error);
        throw error;
    }
}

// const getPokemonDataByName = async (name) => {
//     try {
//         let name = props.name;
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
//         const data = response.data;
//         return data;
//     } catch (error) {
//         console.error('Error fetching the Pokemon data requested:', error);
//         throw error;
//     }
// }

export default PokemonService;
