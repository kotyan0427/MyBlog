import React, { useCallback, VFC } from "react";
import {useRouter} from "next/router"
import {SearchInput} from "../atoms/input/SearchInput"
import {SubmitButton} from "../atoms/button/SubmitButton"
import { useRecoilState } from "recoil";
import { searchValue } from "../stores/searchValue";

export const SearchField:VFC = () => {
    const [value, setValue] = useRecoilState(searchValue);
    const router = useRouter();

    // inputのvalue値を取得する関数
    const onChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    }, []);

    // 検索ページに遷移する関数
    const handleClickSubmitButton = useCallback(() => {
        router.push(`/search/?keyword=${value}`)
    }, [value, router])

    // キーボードをクリックした瞬間に実行される関数
    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        router.push(`/search/?keyword=${value}`)
      }
    }, [value,router]);

  return (
    <form className="flex flex-col items-center space-y-2 mb-3 surface:flex-row surface:justify-center surface:space-y-0 surface:space-x-2">
      <SearchInput value={value} onChange={onChangeValue} onKeyDown={handleKeyDown}/>
      <SubmitButton onClick={handleClickSubmitButton} />
    </form>
  );
}
