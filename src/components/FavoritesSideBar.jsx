import PokemonCard from "./PokemonCard";
import "../style/FavoritesSideBar.css";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { removeCaughtPokemon } from "../services/favorites.service";
import { removePokemon } from "./CatchPokemon";

function FavoritesSideBar() {
  const { favList, removeItemFromFavList } = useContext(AuthContext);

  

  return (
    <>
      <div id="FavoritesSideBarContent">
        <div id="searchPokemon">
          <input type="text" id="searchInput" placeholder="Search by name"></input>
          <button id="searchButton">Grass</button>
        </div>
        <div id="favoriteListContent">
          {favList.length > 0 ? favList.map((pokemon) => (
            <div className="pokemonAndBtn" key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
              <button onClick={()=>removePokemon(pokemon.id, removeItemFromFavList)} className="removePokemon">Remove</button>
            </div>
          )) :
            <p>No favorite pokemons yet</p>
          }

        </div>
      </div>
    </>
  );
}

export default FavoritesSideBar;
