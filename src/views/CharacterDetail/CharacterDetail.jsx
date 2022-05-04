import React from 'react';
import { useState, useEffect } from 'react';
import { fetchCharacter } from '../../services/fetch';
import { useParams } from 'react-router-dom';

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getCharacter = async () => {
      const data = await fetchCharacter(id);
      console.log('character data', data);
      setCharacter(data);
      setLoading(false);
    };
    getCharacter();
  }, []);
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <article>
      <h2>{character.name}</h2>
      <img src={character.image} alt={`Image of ${character.name}`} />
      <section>
        <ul>
          <li>Status: {character.status}</li>
          <li>Species: {character.species}</li>
        </ul>
      </section>
    </article>
  );
}
