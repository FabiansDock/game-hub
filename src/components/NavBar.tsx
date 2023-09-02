import { HStack, Image } from "@chakra-ui/react";
import logo from "./../assets/logo.webp";
import Slider from "./Slider";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack padding="3">
      <Image src={logo} boxSize="60px" />
      <SearchBar />
      <Slider />
    </HStack>
  );
};

export default NavBar;
