import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Tags } from "./Tags";

export const DrawerTags = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose} autoFocus={false}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>タグ一覧</DrawerHeader>
          <DrawerBody>
            <Tags />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
