import React from 'react';
import { useState, useEffect } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { fetchCharacters } from '../../services/fetch';

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getCharacters = async () => {
      const characterData = await fetchCharacters();
      setCharacters(characterData);
      setLoading(false);
    };
    getCharacters();
  }, []);
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <ul>
      {characters.map((char) => (
        <li key={char.id}>
          <CharacterCard {...char} />
        </li>
      ))}
    </ul>
  );
}
