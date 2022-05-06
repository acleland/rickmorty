import React from 'react';
import { useState, useEffect } from 'react';
import { fetchCharacter } from '../../services/fetch';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const getCharacter = async () => {
      const data = await fetchCharacter(id);
      setCharacter(data);
      setLoading(false);
    };
    getCharacter();
  }, []);
  if (loading) {
    return <p>loading...</p>;
  }

  const handleClick = (e) => {
    history.push('/');
  };

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
      <button onClick={handleClick}>Return to Character List</button>
    </article>
  );
}
