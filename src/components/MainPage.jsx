// Components
import TopBar from "./TopBar";
import FavoritesSideBar from "./FavoritesSideBar";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";

// Styles
import '../style/MainPage.css';

/**
 * MainPage
 * A component that serves as the main layout of the application, including the top bar,
 *  favorites sidebar, Pokémon list, and details view.
 * @returns {JSX.Element} - The JSX code to render the main page layout.
 */
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
        </>
    );
}


export default MainPage;