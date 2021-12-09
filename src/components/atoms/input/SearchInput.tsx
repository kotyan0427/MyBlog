import { VFC } from "react";

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const SearchInput:VFC<SearchInputProps> = ({value,onChange,onKeyDown}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e)}
      onKeyDown={(e) =>onKeyDown(e)}
      className="w-7/12 max-w-500 border py-1 px-2 focus:outline-none"
    />
  );
}
