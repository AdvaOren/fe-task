// React and Hooks
import { useContext, useState } from "react";

// Contexts
import { AuthContext } from "../AuthContext";

// Services
import { addFavorite } from "../services/favorites.service";
import { attemptCatch, removePokemon } from './CatchPokemon.jsx';

// Assets
import circleBackground from '../assets/circleBackground.png';

// Components
import PopUp from "./PopUp.jsx";

// Styles
import "../style/PokemonDetails.css";

/**
 * PokemonDetails
 * A component that displays detailed information about a selected Pokémon.
 * It handles catch attempts and displays a popup with the result.
 * @returns {JSX.Element} - The JSX code to render the Pokémon details and catch functionality.
 */
function PokemonDetails() {
  const { pokemonPressed, addItemToFavList, removeItemFromFavList, incrementCatchAttempts } = useContext(AuthContext);
  
  // State to manage the text displayed in the popup
  const [pokemonCaughtText, setPokemonCaughtText] = useState('');
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const handleCatchAttempt = async () => {
    //handle the attempt to catch a Pokémon.  Displays a popup with the result of the attempt.
    $('#myModal').modal('hide'); // Close Details Modal
    let popUpText = ''
    if (pokemonPressed.catchAttempts >= 2) {
      popUpText = "Sorry, you have reached the maximum number of attempts.\n Try again later"
    } else {
      incrementCatchAttempts(pokemonPressed.id);
      const success = await attemptCatch();
      if (success) {
        await addFavorite(pokemonPressed);
        addItemToFavList(pokemonPressed);
        popUpText = "Caught!"
      }
      else {
        popUpText = "Sorry, you couldn't catch the pokemon.\n Try again!"
      }
    }
    setPokemonCaughtText(popUpText);
    setIsPopUpVisible(true);
    await new Promise(resolve => setTimeout(resolve, 3500));
    setIsPopUpVisible(false);
    setPokemonCaughtText('');
  };

  return (
    <>
      {pokemonPressed &&
        <>
           {isPopUpVisible && <PopUp text={pokemonCaughtText} /> }
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog custom-modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 className="modal-title">{pokemonPressed.name}</h4>
                </div>
                <div className="modal-body" id="pokemonDetailsContent">
                  <div id="pokemovInfo">
                    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", marginRight: "10px" }}>
                      <img id="pok" src={pokemonPressed.sprites.front_default} alt={pokemonPressed.name} />
                      <img id="pokBackground" src={circleBackground} alt="circle" />
                    </div>
                    <div>
                      <h2>pokemon info</h2>
                      <div id="details">
                        <div>
                          <p><strong>Name:</strong> {pokemonPressed.name}</p>
                          <p><strong>Abillities:</strong> <br></br>
                          </p>
                          <div className="infoBlocks">
                            {pokemonPressed.abilities.map(({ ability }, indx) => (
                              <span key={indx}>{ability.name}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p><strong>Height:</strong> {pokemonPressed.height}</p>
                          <p><strong>Types:</strong> <br></br>
                          </p>
                          <div className="infoBlocks">
                            {pokemonPressed.types.map(({ type }, indx) => (
                              <span key={indx}>{type.name}</span >
                            ))}</div>
                        </div>
                        <p><strong>Weight:</strong> {pokemonPressed.weight}</p>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal">
                      Back to List
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      onClick={pokemonPressed && pokemonPressed.favorite ? () => removePokemon(pokemonPressed.id, removeItemFromFavList) : handleCatchAttempt}>
                      {pokemonPressed && pokemonPressed.favorite ? 'Remove' : "Catch!"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
}

export default PokemonDetails;
