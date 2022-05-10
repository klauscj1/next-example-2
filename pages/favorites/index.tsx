import { Card, Grid } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { Layout } from "../../components/layouts";
import { FavoritePokemons, NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemon());
  }, []);

  return (
    <Layout title="Favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
