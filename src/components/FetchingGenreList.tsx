import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import genericFetchingHook from "./GenericFetchingHook";
import { useState } from "react";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface Props {
  selectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre }: Props) => {
  const { data: genres, isLoading } = genericFetchingHook<Genre>("/genres");
  const [selectedButton, setSelectedButton] = useState(-1);

  return (
    <List padding={10}>
      <Text fontWeight="bold" fontSize="4xl" whiteSpace="nowrap">
        Genres
      </Text>
      {isLoading && <Spinner />}
      <ListItem paddingY={5}>
        {genres.map((genre) => (
          <HStack key={genre.id} paddingY={1}>
            <Image
              src={genre.image_background}
              width="50px"
              height="50px"
              borderRadius={10}
            />
            <button
              key={genre.id}
              onClick={() => {
                selectedGenre(genre);
                setSelectedButton(genre.id);
              }}
              style={{
                fontSize: "15px",
                color: selectedButton === genre.id ? "dodgerBlue" : "",
              }}
            >
              {genre.name}
            </button>
          </HStack>
        ))}
      </ListItem>
    </List>
  );
};

export default GenreList;
