import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
  searchText: string | null;
}

const NavBar = ({ onSearch, searchText }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={Logo} boxSize={"60px"} />
      <SearchInput searchText={searchText} onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
