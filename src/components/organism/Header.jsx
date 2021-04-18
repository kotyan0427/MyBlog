import { useDisclosure } from "@chakra-ui/react";
import { ResponsiveIcon } from "../atoms/icon/HamburgerIcon";
import { DrawerTags } from "../molecules/Drawer";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <header className="maxContainer h-36 ">
        <div className="flex justify-around items-center mt-1 md:text-center md:flex">
          <img
            src="/images/logoName.png"
            alt="ロゴ画像"
            className="w-60 h-12 object-cover bg-gray-200 rounded-lg"
          />
          <ResponsiveIcon
            onOpen={onOpen}
            display={{ base: "block", md: "none" }}
            width={200}
            height={45}
          />
        </div>
      </header>
      <DrawerTags isOpen={isOpen} onClose={onClose} />
    </>
  );
};
