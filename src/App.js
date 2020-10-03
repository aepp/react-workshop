import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import PokemonList from "./components/PokemonList";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  const [arePokemonsLoaded, setArePokemonsLoaded] = useState(false);

  useEffect(() => {
    if (!arePokemonsLoaded) {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((r) => r.json())
        .then((r) => {
          setPokemons(r.results);
          setArePokemonsLoaded(true);
        })
        .catch((error) => console.log(error));
    }
  }, [arePokemonsLoaded, setPokemons, setArePokemonsLoaded]);

  if (!arePokemonsLoaded) return <CircularProgress />;

  return (
    <div className="App">
      <Typography variant={"h4"}>Pokemon list</Typography>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
