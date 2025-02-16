import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import PaletteComponent from './PaletteComponent';
import { useSelector } from 'react-redux'; 

const Color = () => {
  const copiedColor = useSelector(state => state.color.copiedColor);
  const [colors, setColors] = useState(['#203909', '#3939399', '#888888', '#555555', '#000000']);
 

  const fetchColor = async () => {
    try {
      // Récupérer 5 couleurs différentes
      const responses = await Promise.all([
        fetch("https://x-colors.yurace.pro/api/random"),
        fetch("https://x-colors.yurace.pro/api/random"),
        fetch("https://x-colors.yurace.pro/api/random"),
        fetch("https://x-colors.yurace.pro/api/random"),
        fetch("https://x-colors.yurace.pro/api/random")
      ]);
      
      
      // Convertir les réponses en JSON
      const data = await Promise.all(responses.map(response => response.json()));

      // Récupérer les couleurs HEX
      const newColors = data.map(item => item.hex);

     
      setColors(newColors);
      
    } catch (error) {
      console.error('Error fetching color:', error);
      // Si l'API échoue, définir les couleurs par défaut
      setColors(['#000000', '#000000', '#000000', '#000000', '#000000']);
    }
  };

  useEffect(() => {
    fetchColor();
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 justify-center h-screen bg-blue-200 ">
      <div className='bg-black text-amber-50 p-4 rounded-4xl'>
        Color {copiedColor} copied to your clipboard!
      </div>
      <div className="flex gap-4">
        {/* Afficher les palettes */}
        {colors.map((color, index) => (
          <PaletteComponent key={index} color={color} />
        ))}
      </div>
      <div className='flex flex-col justify-center items-center gap-7'>
        <h1 className="text-3xl font-bold text-black mb-6">Random Color Generator</h1>
        <Button 
          onClick={fetchColor} 
          className="px-4 py-2 text-white rounded-lg shadow-lg hover:bg-fuchsia-600 transition
        ">
          Generate Palette
        </Button>
      </div>
    </div>
  );
};

export default Color;
