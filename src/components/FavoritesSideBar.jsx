// React and Hooks
import { useContext, useEffect, useState } from "react";

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
  const { favList, removeItemFromFavList, dataIsReady, filteredFavList, setFilteredFavListFun, pokemonsList } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [types, setTypes] = useState([{}]);
  const [selectedType, setSelectedType] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    setTypes(getTypes());
    handleTypeChange({ target: { value: selectedType } });
    handleSearchChange({ target: { value: searchName } })
  }, [pokemonsList, favList]);

  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterFavoritesByName(event.target.value);
    setSearchName(event.target.value)
  };

  const handleTypeChange = (event) => {
    // Handle type selection change
    const term = event.target.value;
    setSelectedType(term);
    if (event.target.value === "All") {
      setFilteredFavListFun(favList);
      return;
    }
    let filteredList = [];
    for (let i = 0; i < favList.length; i++) {
      const element = favList[i].types;
      for (let j = 0; j < element.length; j++) {
        if (element[j].type.name.toLowerCase() === term.toLowerCase()) {
          filteredList.push(favList[i]);
          } 
      }
    }
    setFilteredFavListFun(filteredList);
  };

  const filterFavoritesByName = (term) => {
    setSelectedType("All");
    let filteredList = favList;
    filteredList = favList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredFavListFun(filteredList);
  };

 
  const getTypes = () => {
    let types = ["All"];
    pokemonsList.forEach(pokemon => {
      pokemon.types.forEach(type => {
        if (!types.includes(type.type.name)) {
          types.push(type.type.name);
        }
      });
    });
    return types;
  }

  return (
    <div id="FavoritesSideBarContent">
      {dataIsReady ?
        <>
          <div id="searchPokemon">
            <input
              value={searchTerm} onChange={handleSearchChange}
              type="text" id="searchInput" placeholder="Search by name">
            </input>
            <select 
            value={selectedType} 
            name="type" 
            id="typeSelect" 
            onChange={handleTypeChange}>
              {types.map(( type , indx) => {
                return <option key={indx} value={type}>{type}</option>
              })}
            </select>
          </div>
          <div id="favoriteListContent">
            {filteredFavList.length > 0 ? filteredFavList.map((pokemon) => (
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
