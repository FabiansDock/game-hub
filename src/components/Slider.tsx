import { Switch, useColorMode, Text, HStack } from "@chakra-ui/react";

const Slider = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch onChange={toggleColorMode} colorScheme="teal" size="lg" />
      <Text whiteSpace="nowrap">
        {colorMode === "light" ? "Light Mode" : "Dark Mode"}
      </Text>
    </HStack>
  );
};

export default Slider;
