# Pokedex App

## Overview

Pokedex App is a React-based application that allows users to browse, search, and manage their favorite Pokémon. Users can view details of individual Pokémon, attempt to catch them, and add them to their list of favorites. The app leverages the Pokémon API for fetching Pokémon data and uses local storage to persist the user's favorite Pokémon.

## Features

- **Browse Pokémon**: View a list of Pokémon fetched from the Pokémon API.
- **Search Pokémon**: Search for Pokémon by name.
- **Filter by Type**: Filter Pokémon by type (e.g., Grass, Poison, Flying, etc.).
- **View Details**: Click on a Pokémon to view detailed information.
- **Catch Pokémon**: Attempt to catch Pokémon and add them to your favorites. Each Pokémon can only be caught twice.
- **Favorite Management**: View and manage your list of favorite Pokémon, including removing Pokémon from the favorites list.
- **Responsive Design**: The app is designed to be responsive and user-friendly.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for responsive design and UI components.
- **jQuery**: A JavaScript library for DOM manipulation and AJAX requests.
- **Local Storage**: For persisting user data locally.
- **Pokémon API**: For fetching Pokémon data.

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/YourUsername/pokedex-app.git
    cd pokedex-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the application**:
    ```sh
    npm run dev
    ```

    This will start the development server and open the app in your default web browser.


## Usage

1. **Search Pokémon**: Use the search bar to find Pokémon by name.
2. **Filter by Type**: Use the dropdown menu to filter Pokémon by type.
3. **View Details**: Click on a Pokémon card to view detailed information.
4. **Catch Pokémon**: Click the "Catch!" button in the details view to attempt to catch the Pokémon.
5. **Manage Favorites**: View and remove Pokémon from your favorites list in the sidebar.

## Acknowledgements

- [Pokémon API](https://pokeapi.co/) for providing the Pokémon data.
- [React](https://reactjs.org/) for the powerful UI library.
- [Bootstrap](https://getbootstrap.com/) for the responsive design framework.
