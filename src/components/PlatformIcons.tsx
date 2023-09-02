import { IconType } from "react-icons";
import {
  BsXbox,
  BsPlaystation,
  BsWindows,
  BsAndroid2,
  BsApple,
  BsGlobe,
} from "react-icons/bs";
import { SiLinux, SiNintendogamecube } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { HStack, Icon } from "@chakra-ui/react";
import { Game } from "./FetchingGames";

interface Props {
  game: Game;
}

const PlatformIcons = ({ game }: Props) => {
  const Icons: { [key: string]: IconType } = {
    android: BsAndroid2,
    linux: SiLinux,
    playstation: BsPlaystation,
    pc: BsWindows,
    mac: BsApple,
    ios: MdPhoneIphone,
    nintendo: SiNintendogamecube,
    web: BsGlobe,
    xbox: BsXbox,
  };

  return (
    <HStack>
      {game.parent_platforms.map((platform) => (
        <Icon
          as={Icons[platform.platform.slug!]}
          color="Gray"
          key={platform.platform.id}
        />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
