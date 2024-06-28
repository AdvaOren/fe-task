// React and Hooks
import { useContext } from "react";

// Components
import PokemonCard from "./PokemonCard";
import LoadingGif from "../assets/loadingGif.svg?react";

// Contexts
import { AuthContext } from "../AuthContext";

// Services
import { removePokemon } from "./CatchPokemon";

// Styles
import "../style/FavoritesSideBar.css";

/**
 * FavoritesSideBar
 * A component that displays the user's favorite Pokémon in a sidebar.
 * It allows searching through the favorites and removing them.
 * @returns {JSX.Element} - The JSX code to render the favorites sidebar.
 */
function FavoritesSideBar() {
  const { favList, removeItemFromFavList, dataIsReady } = useContext(AuthContext);

  return (
    <div id="FavoritesSideBarContent">
      {dataIsReady ?
        <>
          <div id="searchPokemon">
            <input type="text" id="searchInput" placeholder="Search by name"></input>
            <button id="searchButton">Grass</button>
          </div>
          <div id="favoriteListContent">
            {favList.length > 0 ? favList.map((pokemon) => (
              <div className="pokemonAndBtn" key={pokemon.id}>
                <PokemonCard pokemon={pokemon} />
                <button onClick={() => removePokemon(pokemon.id, removeItemFromFavList)} className="removePokemon">Remove</button>
              </div>
            )) :
              <p>No favorite pokemons yet</p>
            }
          </div>
        </>
        :
        <LoadingGif style={{ width: "10vw" }} />}
    </div>
  );
}

export default FavoritesSideBar;
