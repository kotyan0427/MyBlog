import { VFC } from 'react';

export const Header: VFC = () => {
  return (
    <>
      <header className="maxContainer h-24 ">
        <div className="flex justify-around items-center mt-1 md:text-center md:flex">
          <img
            src="/images/logoName.png"
            alt="ロゴ画像"
            className="w-60 h-12 object-cover bg-gray-200 rounded-lg"
          />
        </div>
      </header>
    </>
  );
};
