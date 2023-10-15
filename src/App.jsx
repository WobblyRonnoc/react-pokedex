import { useState, useEffect } from 'react'

import PokemonList from './components/PokemonList';



function App() {
  const [pokedex, setPokedex] = useState([]);

  async function fetchAllPokemon(){
    const response = await fetch('./src/assets/pokemon.json-master/pokedex.json');
    setPokedex(await response.json());
  }

  useEffect(() => {
    fetchAllPokemon();
  }, [])

  return (
    <>
      <PokemonList pokedex={pokedex} />
    </>
  )
}

export default App
