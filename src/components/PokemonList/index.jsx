import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PokemonDetails from "../PokemonDetails";

export const PokemonList = ({ pokemons }) => {
  const [details, setDetails] = useState({});
  const [areDetailsOpen, setAreDetailsOpen] = useState({});

  const loadDetails = async (pokemon) => {
    await fetch(pokemon.url)
      .then((r) => r.json())
      .then((r) => {
        return setDetails({ ...details, [pokemon.name]: r });
      });
  };

  const toggleDetails = async (pokemon) => {
    if (!details[pokemon.name]) {
      await loadDetails(pokemon);
    }
    setAreDetailsOpen({
      ...areDetailsOpen,
      [pokemon.name]: !areDetailsOpen[pokemon.name]
    });
  };

  return (
    <List>
      {pokemons.map((pokemon) => {
        const open = Boolean(areDetailsOpen[pokemon.name]);
        return (
          <React.Fragment key={pokemon.name}>
            <ListItem
              onClick={() => toggleDetails(pokemon)}
              selected={open}
              button
            >
              <ListItemIcon>
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemIcon>
              <ListItemText primary={pokemon.name} />
            </ListItem>
            <Collapse in={open}>
              {details[pokemon.name] && (
                <PokemonDetails details={details[pokemon.name]} />
              )}
            </Collapse>
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default PokemonList;
