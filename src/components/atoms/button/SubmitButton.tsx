import React, { VFC } from 'react';

type SubmitButtonProps = {
  onClick: () => void;
}

export const SubmitButton: VFC<SubmitButtonProps> = ({onClick}) => {
  return (
    <button
      className="border px-3 py-1 ml-2 bg-white duration-300 hover:bg-black hover:text-white"
      onClick={onClick}
    >
      SEARCH
    </button>
  );
};
