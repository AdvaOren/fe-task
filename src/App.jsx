import { useContext, useEffect } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { getPokemonDetailsByURL, getPokemons } from "./services/pokemon.service";
import { AuthContext } from "./AuthContext";
import { getFavorites } from "./services/favorites.service";

function App() {
  const { setPokemonListFun, setFavListFun } = useContext(AuthContext);

  useEffect(() => {
    (async()=>{
      const getPokemonsDet = async () => {
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
          });
          setPokemonListFun(dataList);
        }
      }
      const getFavPokemons = async () => {
        const favList = await getFavorites();
        if (favList) {  
          setFavListFun(favList);
        }
      }
      await getPokemonsDet();
      await getFavPokemons();
    })();
  }, [])
  return (
    <>
        <MainPage />
    </>
  );
}

export default App;
