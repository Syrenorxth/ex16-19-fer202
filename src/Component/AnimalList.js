import React from 'react';
import data from '../data';
import AnimalCard from './AnimalCard/AnimalCard';

// chuyen object additional thanh chuoi roi hien alert
function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation);
}

const AnimalList = () => {
  return (
    <div>
      <h1>Animals</h1>
      {data.map(animal => (
        <AnimalCard
          key={animal.name}
          additional={animal.additional}
          diet={animal.diet}
          name={animal.name}
          scientificName={animal.scientificName}
          showAdditional={showAdditional}
          size={animal.size}
        />
      ))}
    </div>
  );
};

export default AnimalList;
