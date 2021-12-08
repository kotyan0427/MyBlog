import { useCallback } from "react";
import { useRecoilState } from "recoil";
import {searchValue} from "../../stores/searchValue"

export const SearchInput = () => {
  const [value, setValue] = useRecoilState(searchValue);

  // inputのvalue値を取得する関数
  const onChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChangeValue(e)}
      className="w-7/12 max-w-500 border py-1 px-2 focus:outline-none"
    />
  );
}
