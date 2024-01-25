import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Wrap,
} from "@chakra-ui/react";

interface Props {
  orderBy: (item: string) => void;
}

const OrderBy = ({ orderBy }: Props) => {
  const orderingItems = [
    { key: "", value: "Relevance" },
    { key: "name", value: "Name" },
    { key: "-released", value: "Released" },
    { key: "-added", value: "Added" },
    { key: "-rated", value: "Rated" },
    { key: "-metacritic", value: "Metacritic" },
  ];
  return (
    <Wrap paddingBottom={7}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Order by: Relevance
        </MenuButton>
        <MenuList>
          {orderingItems.map((item) => (
            <MenuItem
              onClick={() => orderBy(item.value)}
              key={item.key}
              value={item.key}
            >
              {item.value}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Wrap>
  );
};

export default OrderBy;
