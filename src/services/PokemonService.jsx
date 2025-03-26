import axios from 'axios'; // use axios to handle the fetch request

const PokemonService = async () => { // func to fetch the pokemon data
    try { // try to fetch the data
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000'); // the API endpoint
        const data = response.data; // the res from the API

        // add error handling

        console.log(data); // log out the data
        return data; // return the data in this func, so when called I can have access to it
    } catch (error) { // if there was an error, then we will log it out and throw error 
        console.error('Error fetching the Pokemon data requested:', error);
        throw error;
    }
}

export default PokemonService;
