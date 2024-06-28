import React, { useContext } from 'react';
import { removeCaughtPokemon } from '../services/favorites.service';
import { AuthContext } from '../AuthContext';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function CaughtModal({ isCaught, showModal, handleClose }) {
//   return (
//     <div className={`caughtModal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} role="dialog">
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">{isCaught ? 'Caught!' : 'Not caught!'}</h5>
//             <button type="button" className="close" onClick={handleClose}>
//               <span>&times;</span>
//             </button>
//           </div>
//           <div className="modal-body">
//             <p>{isCaught ? 'You have successfully caught the Pokémon!' : 'The Pokémon escaped. Try again!'}</p>
//           </div>
//           <div className="modal-footer">
//             <button type="button" className="btn btn-secondary" onClick={handleClose}>
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="modal-backdrop fade show" style={{ display: showModal ? 'block' : 'none' }}></div>
//     </div>
//   );
// }

export const attemptCatch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // 50% chance to catch the Pokémon
      resolve(success);
    }, 1000); // Simulate network delay
  });
};

export const removePokemon = async (pokemonId, removeItemFromFavList) => {
  await removeCaughtPokemon(pokemonId);
  removeItemFromFavList(pokemonId);
};



// export default CaughtModal;
