const CAUGHT_POKEMONS_KEY = 'favorites';

/**
 * getFavorites
 * Retrieves the list of favorite Pokémon from localStorage.
 * @returns {Promise<Array>} - A promise that resolves to an array of favorite Pokémon.
 */
export async function getFavorites() {
  return new Promise((resolve, reject) => {
    try {
      const favorites = localStorage.getItem(CAUGHT_POKEMONS_KEY);
      setTimeout(() => {
        resolve(JSON.parse(favorites) || []);
      }, 500); // Simulate a delay for asynchronous behavior
    } catch (error) {
      reject(new Error('Failed to retrieve favorites from localStorage'));
    }
  });
}

/**
 * addFavorite
 * Adds a Pokémon to the list of favorite Pokémon in localStorage.
 * @param {object} pokemon - The Pokémon object to be added to favorites.
 * @returns {Promise<void>}
 */
export async function addFavorite(pokemon) {
  try {
    const caughtPokemons = await getFavorites();
    const updatedCaughtPokemons = caughtPokemons.length === 0 ? [pokemon] : [...caughtPokemons, pokemon];
    localStorage.setItem(CAUGHT_POKEMONS_KEY, JSON.stringify(updatedCaughtPokemons));
  } catch (error) {
    throw new Error('Failed to add favorite Pokémon');
  }
}

/**
 * isFavorite
 * Checks if a given Pokémon is in the list of favorite Pokémon.
 * @param {object} pokemon - The Pokémon object to check.
 * @param {Array} favList - The list of favorite Pokémon to search within.
 * @returns {boolean} - True if the Pokémon is a favorite, false otherwise.
 */
export async function isFavorite(pokemon, favList) {
  try {
    if (!favList) return false;
    for (let i = 0; i < favList.length; i++) {
      if (favList[i].id === pokemon.id) {
        return true;
      }
    }
    return false;
  } catch (error) {
    throw new Error('Failed to check if Pokémon is a favorite');
  }
}

/**
 * removeCaughtPokemon
 * Removes a Pokémon from the list of favorite Pokémon in localStorage.
 * @param {number} pokemonId - The ID of the Pokémon to be removed.
 * @returns {Promise<void>}
 */
export const removeCaughtPokemon = async (pokemonId) => {
  try {
    const caughtPokemons = await getFavorites();
    const updatedCaughtPokemons = caughtPokemons.filter(pokemon => pokemon.id !== pokemonId);
    localStorage.setItem(CAUGHT_POKEMONS_KEY, JSON.stringify(updatedCaughtPokemons));
  } catch (error) {
    throw new Error('Failed to remove caught Pokémon');
  }
};
