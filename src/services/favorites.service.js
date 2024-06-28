import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const CAUGHT_POKEMONS_KEY = 'favorites';

export async function getFavorites() {
  return new Promise((resolve) => {
    const favorites = localStorage.getItem(CAUGHT_POKEMONS_KEY);
    setTimeout(() => {
      resolve(JSON.parse(favorites) || []);
    }, 500);
  });
}

export async function addFavorite(pokemon) {
  // Add the pokemon to the favorites list
  const caughtPokemons = await getFavorites();
  if (caughtPokemons.length === 0) {
    localStorage.setItem(CAUGHT_POKEMONS_KEY, JSON.stringify([pokemon]));
    return;
  }
  localStorage.setItem(CAUGHT_POKEMONS_KEY, JSON.stringify([...caughtPokemons, pokemon]));
}



export async function isFavorite(pokemon, favList) {
  // Check if the pokemon is in the favorites list
  // const {fevorites} = useContext(AuthContext);
  if(!favList) return false;
  for (let i = 0; i < favList.length; i++) {
    if (favList[i].id === pokemon.id) {
      console.log("innnn");
      return true;
    }
  }
  console.log("out");
  return false;
}


export const removeCaughtPokemon = async(pokemonId) => {
  //remove pokemon from the favorites list
  const caughtPokemons = await getFavorites();
  const updatedCaughtPokemons = caughtPokemons.filter(pokemon => pokemon.id !== pokemonId);
  localStorage.setItem(CAUGHT_POKEMONS_KEY, JSON.stringify(updatedCaughtPokemons));
};
