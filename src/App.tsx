import { Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import FetchingGames, { Platform } from "./components/FetchingGames";
import GenreList, { Genre } from "./components/FetchingGenreList";
import { useState } from "react";
import PlatformsList from "./components/PlatformsList";
import OrderBy from "./components/OrderBy";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [orderBy, setOrderBy] = useState("");
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" width={100}>
          <GenreList
            selectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding={20}>
        <Text fontSize={50} fontWeight="bold">
          New and trending
        </Text>
        <HStack spacing={5} paddingBottom={5}>
          <PlatformsList
            selectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <OrderBy orderBy={(item) => setOrderBy(item)} />
        </HStack>
        <FetchingGames gameQuery={gameQuery} orderBy={orderBy} />
      </GridItem>
    </Grid>
  );
};

export default App;
