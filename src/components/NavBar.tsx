import { HStack, Image } from "@chakra-ui/react";
import logo from "./../assets/logo.webp";
import Slider from "./Slider";
import SearchBar from "./SearchBar";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="3">
      <Image src={logo} boxSize="60px" />
      <SearchBar onSearch={(searchText) => onSearch(searchText)} />
      <Slider />
    </HStack>
  );
};

export default NavBar;
