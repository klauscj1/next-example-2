import { NextPage } from "next";
import { Layout } from "../components/layouts";
import { GetStaticProps } from "next";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Home">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
        })}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons = data.results.map((pokemon, index) => {
    const id = index + 1;

    return {
      ...pokemon,
      id: id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    };
  });
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
