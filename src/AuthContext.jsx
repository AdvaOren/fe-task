import React, { useState } from 'react';


const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const [pokemonsList, setPokemonsList] = useState([]);
    const [theme, setTheme] = useState("theme-light");
    const [favList, setFavList] = useState([]);
    const [pokemonPressed, setPokemonPressed] = useState();

    // function to toggle between light and dark theme
    function toggleTheme() {
        if (theme == 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');

        }
    }
    const setPokemonListFun = (list) => { setPokemonsList(list) };
    const setFavListFun = (list) => { setFavList(list) };
    const setPokemonPressedFun = (pokemon) => { setPokemonPressed(pokemon) };
    const addItemToFavList = (newItem) => {
        if (favList.length === 0) {
            setFavList([newItem]);
            return;
        }
        setFavList((prevFavList) => [...prevFavList, newItem]);
    };
    const removeItemFromFavList = (id) => {
        setFavList((prevFavList) => prevFavList.filter((item) => item.id !== id));
    }



    return (
        <AuthContext.Provider value={{ removeItemFromFavList, setPokemonListFun, toggleTheme, pokemonsList, theme, favList, setFavListFun, pokemonPressed, setPokemonPressedFun, addItemToFavList }}>
            {children}
        </AuthContext.Provider>
    );

}




export { AuthProvider, AuthContext };

