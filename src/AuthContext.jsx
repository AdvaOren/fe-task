// React and Hooks
import React, { useState } from 'react';

// Contexts
const AuthContext = React.createContext();

/**
 * AuthProvider
 * A component that provides authentication and user data context to its children.
 * It manages the state for Pokémon list, favorite list, selected Pokémon, and data readiness.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} - The JSX code to render the context provider.
 */
function AuthProvider({ children }) {
    // State for the list of all Pokémon
    const [pokemonsList, setPokemonsList] = useState([]);
    // State for the list of favorite Pokémon
    const [favList, setFavList] = useState([]);
    // State for the currently selected Pokémon
    const [pokemonPressed, setPokemonPressed] = useState();
    // State to indicate if the data is ready
    const [dataIsReady, setDataIsReady] = useState(false);
    // State for the list of filtered favorite Pokémon
    const [filteredFavList, setFilteredFavList] = useState([]);

    // Setters functions
    const setDataIsReadyFun = (bool) => { setDataIsReady(bool) };
    const setPokemonListFun = (list) => { setPokemonsList(list) };
    const setFavListFun = (list) => { setFavList(list) };
    const setPokemonPressedFun = (pokemon) => { setPokemonPressed(pokemon) };
    const setFilteredFavListFun = (list) => { setFilteredFavList(list) };


    /**
     * addItemToFavList
     * Adds a new item to the favorite list.
     * @param {object} newItem - The new item to be added to the favorite list.
     */
    const addItemToFavList = (newItem) => {
        if (favList.length === 0) {
            setFavList([newItem]);
            return;
        }
        setFavList((prevFavList) => [...prevFavList, newItem]);
    };

    /**
     * incrementCatchAttempts
     * Increments the catch attempts for a given Pokémon by ID.
     * @param {number} id - The ID of the Pokémon.
     */
    const incrementCatchAttempts = (id) => {
        setPokemonsList((prevList) =>
            prevList.map((pokemon) =>
                pokemon.id === id
                    ? { ...pokemon, catchAttempts: pokemon.catchAttempts + 1 }
                    : pokemon
            )
        );
    };

    /**
     * removeItemFromFavList
     * Removes an item from the favorite list by ID.
     * @param {number} id - The ID of the item to be removed.
     */
    const removeItemFromFavList = (id) => {
        setFavList((prevFavList) => prevFavList.filter((item) => item.id !== id));
    }

    return (
        <AuthContext.Provider value={{
            incrementCatchAttempts, removeItemFromFavList, setPokemonListFun,
            pokemonsList, favList, setFavListFun, pokemonPressed, setPokemonPressedFun,
            addItemToFavList, dataIsReady, setDataIsReadyFun, filteredFavList, setFilteredFavListFun
        }}>
            {children}
        </AuthContext.Provider>
    );
}
export { AuthProvider, AuthContext };

