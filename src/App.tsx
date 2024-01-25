import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import FetchingGames, { Platform } from "./components/FetchingGames";
import GenreList, { Genre } from "./components/FetchingGenreList";
import { useState } from "react";
import PlatformsList from "./components/PlatformsList";
import DynamicHeading from "./components/DyanmicHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setGameQuery({ ...gameQuery, searchText: searchText })
          }
        />
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
        <Box marginY="5">
          <DynamicHeading gameQuery={gameQuery} />
          <HStack spacing={5} paddingBottom={5}>
            <PlatformsList
              selectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform: platform })
              }
            />
          </HStack>
        </Box>
        <FetchingGames gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
