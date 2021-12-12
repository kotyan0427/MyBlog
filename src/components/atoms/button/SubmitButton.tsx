import React, { VFC } from 'react';

type SubmitButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SubmitButton: VFC<SubmitButtonProps> = ({onClick}) => {
  return (
    <button
      className="border px-3 py-1 ml-2 bg-white duration-300 hover:bg-black hover:text-white"
      onClick={(e) => onClick(e)}
    >
      SEARCH
    </button>
  );
};
