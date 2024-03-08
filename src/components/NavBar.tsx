import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Index from "./Clock/Index";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Index />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
