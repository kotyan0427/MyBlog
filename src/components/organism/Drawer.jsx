import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";

export const DrawerTags = ({ isOpen, onClose }) => {
  const [tags, setTags] = useState([
    { id: "サンプル1", text: "サンプル1" },
    { id: "サンプル2", text: "サンプル2" },
  ]);

  const handleDrag = useCallback(
    (tag, currPos, newPos) => {
      const newTags = [...tags];
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
      setTags({ tags: newTags });
    },
    [tags]
  );

  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose} autoFocus={false}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>タグ一覧</DrawerHeader>
          <DrawerBody>
            <ReactTags tags={tags} handleDrag={handleDrag} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
