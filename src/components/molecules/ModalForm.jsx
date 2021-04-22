import { Stack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { BasicButton } from "../atoms/button/BasicButton";
import { BasicInput } from "../atoms/input/BasicInput";
import { BasicTextArea } from "../atoms/input/BasicTextArea";

export const ModalForm = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="gray.600">お問い合わせフォーム</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <p className="text-gray-600">お名前</p>
            <BasicInput />
            <p className="text-gray-600">メールアドレス</p>
            <BasicInput />
            <p className="text-gray-600">お問い合わせ内容</p>
            <BasicTextArea />
          </Stack>
        </ModalBody>

        <ModalFooter>
          <BasicButton onClose={onClose}>送信</BasicButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
