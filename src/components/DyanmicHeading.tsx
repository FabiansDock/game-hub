import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const DynamicHeading = ({ gameQuery }: Props) => {
  const dynamicHeading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;
  return <Heading>{dynamicHeading}</Heading>;
};

export default DynamicHeading;
