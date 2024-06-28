// React and Hooks
import { useContext, useEffect } from "react";

// Styles
import "./App.css";

// Components
import MainPage from "./components/MainPage";

// Services
import { getPokemonDetailsByURL, getPokemons } from "./services/pokemon.service";
import { getFavorites } from "./services/favorites.service";

// Contexts
import { AuthContext } from "./AuthContext";

/**
 * App
 * The main application component that initializes the Pokémon list 
 * and favorite list from the API and local storage.
 * @returns {JSX.Element} - The JSX code to render the main application.
 */
function App() {
  const { setPokemonListFun, setFavListFun, setDataIsReadyFun, setFilteredFavListFun } = useContext(AuthContext);

  useEffect(() => {
    (async()=>{
      const getPokemonsDet = async () => {
        // Fetches the list of Pokémon and their details, then updates the Pokémon list in the context.
        const response = await getPokemons();
        const data = response.results;
        const dataList = [];
        for (let i = 0; i < data.length; i++) {
          const pokemonsDetails = await getPokemonDetailsByURL(data[i].url);
          dataList.push({
            id: pokemonsDetails.id,
            name: pokemonsDetails.name,
            sprites: pokemonsDetails.sprites,
            types: pokemonsDetails.types,
            weight: pokemonsDetails.weight,
            height: pokemonsDetails.height,
            abilities: pokemonsDetails.abilities,
            catchAttempts: 0,
          });
          setPokemonListFun(dataList);
        }
      }
      const getFavPokemons = async () => {
        // Fetches the favorite Pokémon list from local storage and updates the favorite list in the context.
        const favList = await getFavorites();
        if (favList) {  
          setFavListFun(favList);
          setFilteredFavListFun(favList);
        }
      }
      await getPokemonsDet();
      await getFavPokemons();
      setDataIsReadyFun(true);
    })();
  }, [])
  return (
    <>
        <MainPage />
    </>
  );
}

export default App;
