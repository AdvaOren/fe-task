import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import "../style/PokemonDetails.css";
import { addFavorite, isFavorite } from "../services/favorites.service";
import { attemptCatch, removePokemon } from './CatchPokemon.jsx';
import circleBackground from '../assets/circle.jpg';

function PokemonDetails() {
  const { pokemonPressed, addItemToFavList, removeItemFromFavList } = useContext(AuthContext);
  // const [isCaught, setIsCaught] = useState(false);
  // const [attemptingCatch, setAttemptingCatch] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     console.log("pokemonPressed", p);
  //     setFavorite(await isFavorite(p));
  //   })();
  // }, [])
  const handleCatchAttempt = async () => {
    const success = attemptCatch();
    if (success) {
      // setIsCaught(true);
      await addFavorite(pokemonPressed);
      addItemToFavList(pokemonPressed);
    }
  };

  // const handleClose = () => {
  //   setShowModal(false);
  // };
  return (
    <>
      {pokemonPressed &&
        <>
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
                            {/* <div className="infoBlocks">{pokemonPressed.abilities.map(({ ability }, indx) => (<span key={indx}>{ability.name}</span >))}</div> */}
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
                    <button type="button" className="btn btn-default" data-dismiss="modal">
                      Back to List
                    </button>
                    <button type="button" className="btn btn-default" data-dismiss="modal"
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
