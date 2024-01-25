import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Wrap,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import genericFetchingHook from "./GenericFetchingHook";
import { Platform } from "./FetchingGames";
import { useState } from "react";

interface Props {
  selectedPlatform: (platform: Platform) => void;
}

const PlatformsList = ({ selectedPlatform }: Props) => {
  const { data: platforms } = genericFetchingHook<Platform>("/platforms");
  const [selectedPlat, setSelectedPlat] = useState<Platform | null>(null);

  return (
    <Wrap paddingBottom={7}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedPlat?.name || "Platforms"}
        </MenuButton>
        <MenuList maxH="200px" overflowY="auto">
          {platforms.map((platform) => (
            <MenuItem
              onClick={() => {
                setSelectedPlat(platform);
                selectedPlatform(platform);
              }}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Wrap>
  );
};

export default PlatformsList;
