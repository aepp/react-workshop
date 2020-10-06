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
import { makeStyles } from "@material-ui/core/styles";
import PokemonDetails from "../PokemonDetails";
import styles from "./styles";

const useStyles = makeStyles(styles);

export const PokemonList = ({ pokemons }) => {
  const [details, setDetails] = useState({});
  const [areDetailsOpen, setAreDetailsOpen] = useState({});

  const classes = useStyles();

  const loadDetails = async (pokemon) => {
    await fetch(pokemon.url)
      .then((r) => r.json())
      .then((r) => {
        return setDetails({ ...details, [pokemon.name]: r });
      });
  };

  const toggleDetails = (pokemon) => {
    if (!details[pokemon.name]) {
      loadDetails(pokemon);
    }
    setAreDetailsOpen({
      ...areDetailsOpen,
      [pokemon.name]: !areDetailsOpen[pokemon.name]
    });
  };

  return (
    <List>
      {pokemons.map((pokemon, i) => {
        const open = Boolean(areDetailsOpen[pokemon.name]);
        return (
          <React.Fragment key={pokemon.name}>
            <ListItem
              className={i % 2 !== 0 ? classes.odd : classes.even}
              classes={{
                selected:
                  i % 2 !== 0 ? classes.selectedOdd : classes.selectedEven
              }}
              onClick={() => toggleDetails(pokemon)}
              selected={open}
              button
            >
              <ListItemIcon>
                {open ? (
                  <ExpandLessIcon className={classes.colorWhite} />
                ) : (
                  <ExpandMoreIcon className={classes.colorWhite} />
                )}
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
