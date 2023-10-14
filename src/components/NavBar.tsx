import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={Logo} boxSize={"60px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;