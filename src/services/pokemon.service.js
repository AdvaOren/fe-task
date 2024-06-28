// Constants
const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

/**
 * getPokemons
 * Fetches the list of Pokémon from the API.
 * @returns {Promise<object>} - A promise that resolves to the JSON response containing the list of Pokémon.
 * @throws {Error} - Throws an error if the fetch request fails.
 */
export async function getPokemons() {
  const response = await fetch(`${API_URL}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon data');
  }
  return await response.json();
}

/**
 * getPokemonDetailsByURL
 * Fetches the Pokémon details according to the URL given in the list of Pokémon.
 * Transforms the data to include only the id, name, relevant sprites,
 *  types, weight, height, and abilities.
 * @param {string} url - The URL to fetch the Pokémon details from.
 * @returns {Promise<object>} - A promise that resolves to the JSON response containing the Pokémon details.
 * @throws {Error} - Throws an error if the fetch request fails.
 */
export async function getPokemonDetailsByURL(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon details');
  }
  return await response.json();
}

