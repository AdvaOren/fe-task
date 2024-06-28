import { removeCaughtPokemon } from '../services/favorites.service';

/**
 * attemptCatch
 * Simulates an attempt to catch a Pokémon with a 50% success rate.
 * @returns {Promise<boolean>} - A promise that resolves to true if the Pokémon is caught, otherwise false.
 */
export const attemptCatch = async() => {
  return new Promise((resolve) => {
    // Simulate a network delay of 1 second
    setTimeout(() => {
      const num = Math.random();
      const success = num > 0.5; 
      resolve(success);
    }, 1000); 
  });
};

/**
 * removePokemon
 * Handles the removal of a Pokémon from the favorites list.
 * @param {number} pokemonId - The ID of the Pokémon to be removed.
 * @param {function} removeItemFromFavList - A function that removes the Pokémon from the local favorites list.
 * @returns {Promise<void>}
 */
export const removePokemon = async (pokemonId, removeItemFromFavList) => {
  $('#myModal').modal('hide'); // Close the Details Modal 
  await removeCaughtPokemon(pokemonId);
  removeItemFromFavList(pokemonId);
};
