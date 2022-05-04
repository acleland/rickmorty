export async function fetchCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  console.log(res);
  const data = await res.json();
  return data.results;
}

export async function fetchCharacter(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  const data = await res.json();
  console.log(data);
  return data;
}
