import PokemonCard from "./PokemonCard";
import "../style/FavoritesSideBar.css";
function FavoritesSideBar() {
  return (
    <>
      <div id="FavoritesSideBarContent">
        <div id="searchPokemon">
          <input type="text" id="searchInput" placeholder="Search by name"></input>
          <button id="searchButton">Grass</button>
        </div>
        <div className="pokemonListContent">
          <div className="pokemonCard">
            <PokemonCard />
            <p>number</p>
            <button id="removePokemon">Remove</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FavoritesSideBar;
