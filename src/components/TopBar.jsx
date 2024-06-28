import '../style/TopBar.css';
import PokemonLogo from '../assets/pokemon_logo.svg?react';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

function TopBar() {
  const { favList } = useContext(AuthContext);
  return (
    <>
      <div id="topBarContent">
        <PokemonLogo id="headerTopBar" />
        <p>Favorites {favList.length}</p>
      </div>
    </>
  );
}


export default TopBar;