import { Badge } from "@chakra-ui/react";
import { Game } from "./FetchingGames";

interface Props {
  game: Game;
}

const CritcRating = ({ game: { metacritic: score } }: Props) => {
  const colorSetter = score > 89 ? "Green" : score > 75 ? "lightGreen" : "gold";
  return <Badge bgColor={colorSetter}>{score}</Badge>;
};

export default CritcRating;
