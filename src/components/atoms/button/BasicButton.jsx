import { Button } from "@chakra-ui/button";

export const BasicButton = ({ onClose, children }) => {
  return (
    <Button colorScheme="blue" onClick={onClose}>
      {children}
    </Button>
  );
};
