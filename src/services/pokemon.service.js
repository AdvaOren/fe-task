const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export async function getPokemons() {
  // Fetch the list of pokemons from the API
  const response = await fetch(`${API_URL}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon data');
  }
  return await response.json();
}

export async function getPokemonDetailsByURL(url) {
  // Fetch the pokemon details from according to the url given in the list of pokemons
  // Transform the data to only include to include only the id, name, relevant sprites, types, weight, height, and abilities.
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon details');
  }
  return await response.json();
}

// pokemon.service.js


export const fetchPokemons = async (limit = 20, offset = 0) => {
  
};

export const fetchPokemonDetails = async (url) => {
  
};
