import { Button } from '@chakra-ui/button';
import { VFC } from 'react';
import { ButtonChildrenProps } from '../../types/buttonChildren';

type BasicButtonProps = ButtonChildrenProps & {
  onClose: () => void;
};

export const BasicButton: VFC<BasicButtonProps> = ({ onClose, children }) => {
  return (
    <Button colorScheme="blue" onClick={onClose}>
      {children}
    </Button>
  );
};
