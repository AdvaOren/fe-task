// React and Hooks
import { useContext } from 'react';

// Contexts
import { AuthContext } from '../AuthContext';

// Assets
import PokemonLogo from '../assets/pokemon_logo.svg?react';

// Styles
import '../style/TopBar.css';

/**
 * TopBar
 * A component that displays the top navigation bar with the Pokémon logo and 
 * the count of favorite Pokémon.
 * @returns {JSX.Element} - The JSX code to render the top bar.
 */
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