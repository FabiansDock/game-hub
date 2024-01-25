import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCards from "./GameCards";
import GamingCardSkeletons from "./GameCardSkeletons";
import GameCardStyles from "./GameCardStyles";
import genericFetchingHook from "./GenericFetchingHook";
import { GameQuery } from "../App";

export interface Platform {
  id: number | null | undefined;
  name: string | null | undefined;
  image_background: string | null | undefined;
  slug: string | null | undefined;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface Props {
  gameQuery: GameQuery;
}

const FetchingGames = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = genericFetchingHook<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && (
        <Text fontSize={15} color="red">
          {error}
        </Text>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 3, "2xl": 4 }}
        spacingY={16}
        spacingX={0}
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardStyles>
              <GamingCardSkeletons key={s} />
            </GameCardStyles>
          ))}
        {!isLoading &&
          games.map((game) => (
            <GameCardStyles>
              <GameCards key={game.id} game={game} />
            </GameCardStyles>
          ))}
      </SimpleGrid>
    </>
  );
};

export default FetchingGames;
