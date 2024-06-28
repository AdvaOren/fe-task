import TopBar from "./TopBar";
import FavoritesSideBar from "./FavoritesSideBar";
import PokemonList from "./PokemonList";
import '../style/MainPage.css';
import PokemonDetails from "./PokemonDetails";
// import CaughtModal from "./CatchPokemon";

function MainPage() {
    return (
        <>
            <div id="mainPageContent">
                <TopBar />
                <div id="favAndList">
                    <FavoritesSideBar />
                    <PokemonList />
                </div>
            </div>
            <PokemonDetails />
            {/* <CaughtModal /> */}
        </>
    );
}


export default MainPage;