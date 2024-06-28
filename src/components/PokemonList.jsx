import PokemonCard from "./PokemonCard";
import "../style/PokemonList.css";
import { AuthContext } from "../AuthContext";
import { useContext, useEffect, useState } from "react";

function PokemonList() {
  const { pokemonsList } = useContext(AuthContext);
  const [pokemonsPerPage, setPokemonsPerPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 14;
  useEffect(() => {
    setPokemonsPerPage(pokemonsList.slice(0, imagesPerPage));
  }, [pokemonsList]);
  // useEffect(() => {
  //   imagesPerPage = calculateImagesPerPage();
  //   totalPages = Math.ceil(pokemonsList.length / imagesPerPage);
  //   showImages(1);

  // }, [pokemonsList, currentPage]);

  // function calculateImagesPerPage() {
  //   const containerWidth = document.getElementById('pokemonListContent').clientWidth;
  //   const imageWidthVw = 8; // Image width in vw
  //   const imageGapPx = 10; // Gap between images in pixels

  //   const imageWidthPx = (window.innerWidth * imageWidthVw) / 100; // Convert vw to pixels
  //   const totalImageWidth = imageWidthPx + imageGapPx; // Total width per image including gap

  //   const imagesPerRow = Math.floor(containerWidth / totalImageWidth);
  //   const rowsPerPage = 2; // Adjust based on the height of the container
  //   return imagesPerRow * rowsPerPage;
  // }

  // function showImages(page) {
  //   const start = (page - 1) * imagesPerPage;
  //   const end = Math.min(start + imagesPerPage, pokemonsList.length);
  //   setPokemonsPerPage(pokemonsList.slice(start, end));
  // }

  // function prevPage() {
  //   if (currentPage > 1) {
  //     showImages(currentPage - 1);
  //     setCurrentPage(currentPage - 1);
  //   }
  // }

  // function nextPage() {
  //   if (currentPage < totalPages) {
  //     showImages(currentPage + 1);
  //     setCurrentPage(currentPage + 1);
  //   }
  // }

  // // Recalculate images per page and update display on window resize
  // window.addEventListener('resize', () => {
  //   const newImagesPerPage = calculateImagesPerPage();
  //   if (newImagesPerPage !== imagesPerPage) {
  //     imagesPerPage = newImagesPerPage;
  //     totalPages = Math.ceil(pokemonsList.length / imagesPerPage);
  //     showImages(currentPage);
  //   }
  // });
  const handleNextPage = () => {
    const start = currentPage * imagesPerPage;
    const end = Math.min(start + imagesPerPage, pokemonsList.length)
    setPokemonsPerPage(pokemonsList.slice(start, end));
    setCurrentPage(currentPage + 1);
  }
  return (
    <>
      <div id="pokemonListContent">
        {pokemonsPerPage && pokemonsPerPage.length > 0 &&
          pokemonsPerPage.map((pokemon, indx) => (
            <PokemonCard key={indx} pokemon={pokemon} />
          ))
        }
      </div>
      {/* <div id="pageNumber">{currentPage}</div> */}

    </>
  );
}

export default PokemonList;
