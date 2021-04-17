import { HamburgerIcon } from "@chakra-ui/icons";

export const ResponsiveIcon = ({ display, width, height, onOpen }) => {
  return <HamburgerIcon onClick={onOpen} display={display} w={width} h={height} />;
};
