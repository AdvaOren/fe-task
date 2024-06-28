// React and Hooks
import { useContext } from "react";

// Contexts
import { AuthContext } from "../AuthContext";

// Components
import PokemonCard from "./PokemonCard";
import LoadingGif from "../assets/loadingGif.svg?react";

// Styles
import "../style/PokemonList.css";

/**
 * PokemonList
 * A component that displays a list of Pokémon cards.
 * It shows a loading gif while the data is being fetched.
 * @returns {JSX.Element} - The JSX code to render the Pokémon list.
 */
function PokemonList() {
  const { pokemonsList, dataIsReady } = useContext(AuthContext);
  
  return (
    <>
        <div id="pokemonListContent">
        {dataIsReady ?
          pokemonsList && pokemonsList.length > 0 &&
          pokemonsList.map((pokemon, indx) => (
              <PokemonCard key={indx} pokemon={pokemon} />
            ))
          : <LoadingGif style={{ width: "10vw" }} />}
        </div>
    </>);
}

export default PokemonList;
