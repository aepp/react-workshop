import React from "react";
import { makeStyles, Typography, Card, CardMedia } from "@material-ui/core";
import styles from "./style";

const useStyles = makeStyles(styles);

export const PokemonDetails = ({ details }) => {
  console.log(details);
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={details.sprites.front_default}
      />
      <div className={classes.abilities}>
        <Typography variant={"h6"}>Abilities</Typography>
        {details.abilities.map((ability) => {
          return <Typography>{ability.ability.name}</Typography>;
        })}
      </div>
    </Card>
  );
};

export default PokemonDetails;
