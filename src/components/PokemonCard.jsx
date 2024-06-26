import "../style/PokemonCard.css";

function PokemonCard() {
  return (
    <>
      <div className="pokemonCardContent">
        <div className="pokemonCardHeader">
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/210226041421-02-pokemon-anniversary-design.jpg?q=w_1110,c_fill"
            className="pokemonCardImage"
            alt="pokemon" />
          <p>name</p>
        </div>
      </div>
    </>
  );
}


export default PokemonCard;