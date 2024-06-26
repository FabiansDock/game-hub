import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Game } from "./FetchingGames";
import PlatformIcons from "./PlatformIcons";
import CritcRating from "./CritcRating";
import getImageUrls from "../services/image-urls";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  const toast = useToast();
  return (
    <Card maxW="md">
      <Image src={getImageUrls(game.background_image)} />
      <CardBody>
        <Stack mt="0" spacing="3">
          <HStack justifyContent="space-between">
            <PlatformIcons game={game} />
            <CritcRating game={game} />
          </HStack>
          <Heading size="lg">{game.name}</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <VStack>
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={() =>
              toast({
                title: "Account verification successfull !",
                description: "Item added to cart successfully.",
                status: "success",
                duration: 7000,
                isClosable: true,
              })
            }
          >
            Add to cart
          </Button>
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default GameCards;
