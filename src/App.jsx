import React, { useState } from "react";
import Pokemon from "./Pokemon.jsx";

const App = () => {
  const API_BASE = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemonData, setPokemonData] = useState(null);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [error, setError] = useState(null);

  const FetchPokemon = async e => {
    e.preventDefault();
    try {
      const fetchData = await fetch(
        `${API_BASE}/${searchPokemon.toLowerCase()}`
      );
      if (!fetchData.ok) {
        throw new Error("No such Pokémon");
      }
      const json = await fetchData.json();
      setPokemonData(json);
      setError(null); // Clear previous errors
    } catch (err) {
      console.error(err);
      setError("No such Pokémon");
      setPokemonData(null); // Clear previous data
    }
  };

  return (
    <div>
      <form onSubmit={FetchPokemon}>
        <input
          type="text"
          value={searchPokemon}
          onChange={e => setSearchPokemon(e.target.value)}
        />
        <input type="submit" />
      </form>

      <div>
        {error
          ? <div>
              {error}
            </div>
          : <Pokemon pokemon={pokemonData} />}
      </div>
    </div>
  );
};

export default App;
