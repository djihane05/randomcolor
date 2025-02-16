import React from 'react';
import { useDispatch } from 'react-redux';
import { setCopiedColor } from '../state/color-reducer-redux'; // Assurez-vous que le chemin est correct
import { useSelector } from 'react-redux'; // Assurez-vous de l'importer aussi

const PaletteComponent = ({ color }) => {
  const dispatch = useDispatch();

  // Fonction pour gérer la copie de la couleur
  const handleCopyColor = (color) => {
    navigator.clipboard.writeText(color)
      .then(() => {
        // Mettre à jour l'état Redux avec la couleur copiée
        dispatch(setCopiedColor(color)); 
        // Afficher un message d'alerte ou mettre à jour un message sur la page
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className='flex-col bg-white w-32 h-48 justify-center align-center rounded-sm'>
      <div 
        className='w-28 h-40 p-4 m-auto mt-2' 
        style={{ backgroundColor: color }} 
        onClick={() => handleCopyColor(color)} // Utiliser onClick sur le bloc de couleur
      ></div>
      <div className='text-center text-sm'>
        {color} {/* Afficher la couleur en texte */}
      </div>
    </div>
  );
};

export default PaletteComponent;
