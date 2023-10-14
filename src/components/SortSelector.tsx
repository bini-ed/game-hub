import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSort: (sort: string) => void;
  sortOrder?: string | null;
}

const SortSelector = ({ onSelectSort, sortOrder }: Props) => {
  const orders = [
    { label: "Relevance", value: "" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Released date", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average Rating", value: "-rating" },
  ];

  const currentOrder = orders.find((order) => order.value === sortOrder)?.label;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentOrder || "Relevance"}
      </MenuButton>

      <MenuList>
        {orders.map((order) => (
          <MenuItem
            as={Button}
            onClick={() => onSelectSort(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
