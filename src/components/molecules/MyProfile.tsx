import { useDisclosure } from '@chakra-ui/react';
import { VFC } from 'react';
import { TwitterButton } from '../atoms/button/TwitterButton';
import { ModalForm } from './ModalForm';

export const MyProfile: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <h1 className="asideHeading">プロフィール</h1>
      <div className="text-center space-y-5 my-5">
        <img
          src="/images/profileImage.jpg"
          alt="プロフィール画像"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <p className="font-semibold">こーちゃん</p>
        <p className="text-left text-gray-600">
          2007年から千葉ロッテのファンをやっている平沢大河世代。
          <br />
          元は楽天ファンだったが、ファンの熱い応援と西岡剛に憧れてロッテの魅力に取りつかれる。
          <br />
          三度の飯より千葉ロッテ。
        </p>
        <a
          href="https://twitter.com/kotyanlotte26"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <TwitterButton>Twitter</TwitterButton>
        </a>
        <br />
        <p
          className="text-gray-600 text-left text-sm duration-300 hover:text-blue-300 hover:cursor-pointer"
          onClick={onOpen}
        >
          お問い合わせフォーム
        </p>
        <ModalForm isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
  );
};
