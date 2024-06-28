import { useContext, useState } from "react";
import "../style/PokemonCard.css";
import { AuthContext } from "../AuthContext";
import { isFavorite } from "../services/favorites.service";

function PokemonCard({ pokemon }) {
  const [pokemonImg, setPokemonImg] = useState(pokemon && pokemon.sprites && pokemon.sprites.front_default)
  const { setPokemonPressedFun, favList } = useContext(AuthContext);

  const mouseOver = () => { setPokemonImg(pokemon && pokemon.sprites && pokemon.sprites.front_shiny) }
  const mouseOut = () => { setPokemonImg(pokemon && pokemon.sprites && pokemon.sprites.front_default) }
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