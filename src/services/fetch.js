export async function fetchCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  console.log(res);
  const data = await res.json();
  return data.results;
}
