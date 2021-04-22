import { Button } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";

export const TwitterButton = ({ children }) => {
  return (
    <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
      {children}
    </Button>
  );
};
