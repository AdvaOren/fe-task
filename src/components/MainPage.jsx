import TopBar from "./TopBar";
import FavoritesSideBar from "./FavoritesSideBar";
import PokemonList from "./PokemonList";
import '../style/MainPage.css';

function MainPage() {
    return (
        <>
            <div id="mainPageContent">
                <div style={{ flexGrow: 3 }} >
                    <TopBar />
                </div>
                <div id="favAndList">
                    <FavoritesSideBar />
                    <PokemonList />
                </div>
            </div >
        </>
    );
}


export default MainPage;