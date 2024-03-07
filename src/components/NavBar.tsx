import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Index from "./Clock/Index";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} />
      <Index />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
