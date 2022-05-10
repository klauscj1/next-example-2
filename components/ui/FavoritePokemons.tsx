import { Card, Grid } from "@nextui-org/react";
import { FC } from "react";
import { Pokemon } from "../../interfaces/pokemon-full";
import { FavoriteCardPokemon } from "./";
interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => {
        return <FavoriteCardPokemon id={id} key={id} />;
      })}
    </Grid.Container>
  );
};
