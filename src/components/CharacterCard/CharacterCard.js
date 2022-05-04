import React from 'react';

export default function CharacterCard(character) {
  return (
    <div className="characterCard">
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
    </div>
  );
}
