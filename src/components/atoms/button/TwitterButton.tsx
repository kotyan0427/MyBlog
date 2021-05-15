import { Button } from "@chakra-ui/react";
import { VFC } from "react";
import { FaTwitter } from "react-icons/fa";
import { ButtonChildrenProps } from "../../types/buttonChildren";

export const TwitterButton: VFC<ButtonChildrenProps> = ({ children }) => {
  return (
    <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
      {children}
    </Button>
  );
};
