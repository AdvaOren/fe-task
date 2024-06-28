// React and Hooks
import { useContext, useState } from "react";

// Contexts
import { AuthContext } from "../AuthContext";

// Services
import { isFavorite } from "../services/favorites.service";

// Styles
import "../style/PokemonCard.css";

/**
 * PokemonCard
 * A component that displays a Pokémon card with image, name, and ID.
 * It handles image switching on hover and displays detailed information on click.
 * @param {object} pokemon - The Pokémon data to be displayed in the card.
 * @returns {JSX.Element} - The JSX code to render a Pokémon card.
 */
function PokemonCard({ pokemon }) {
  // State to manage the displayed Pokémon image
  const [pokemonImg, setPokemonImg] = useState(pokemon && pokemon.sprites && pokemon.sprites.front_default)
    
  // Retrieve functions and data from AuthContext
  const { setPokemonPressedFun, favList } = useContext(AuthContext);

 // Handle mouse over event and switch the Pokémon image to the shiny version.
  const mouseOver = () => { setPokemonImg(pokemon && pokemon.sprites && pokemon.sprites.front_shiny) }
  
  // Handle mouse out event and switch the Pokémon image back to the default version.
  const mouseOut = () => { setPokemonImg(pokemon && pokemon.sprites && pokemon.sprites.front_default) }
 
  // Handle mouse click event, set the Pokémon as pressed, and check if it is a favorite.
  const mousePress = async () => { setPokemonPressedFun({ ...pokemon, favorite: await isFavorite(pokemon, favList) }) }

  return (
    <>
      <div className="pokemonCardContent">
        <div
          type="button"
          className="pokemonCardHeader"
          data-toggle="modal"
          data-target="#myModal"
          onMouseOver={mouseOver} onMouseOut={mouseOut} onClick={mousePress} >
          <img src={pokemonImg}
            className="pokemonCardImage"
            alt={`${pokemon.name} pokemon`} />
          <hr className="pokemonCardSeparator" />
          <p>{pokemon && pokemon.name}</p>
          <p>{pokemon && pokemon.id}</p>
        </div>
      </div>
    </>
  );
}


export default PokemonCard;