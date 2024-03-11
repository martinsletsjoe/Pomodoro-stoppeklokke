import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Clock from "./clock/Clock";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Clock />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
