import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterCard(character) {
  return (
    <Link to={`/characters/${character.id}`}>
      <div className="characterCard">
        <img src={character.image} alt={`Image of ${character.name}`} />
        <p>{character.name}</p>
      </div>
    </Link>
  );
}
