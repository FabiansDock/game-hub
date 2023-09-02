import { Input, InputGroup } from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <InputGroup>
      <Input type="text" borderRadius="20px" variant="filled" />
    </InputGroup>
  );
};

export default SearchBar;
