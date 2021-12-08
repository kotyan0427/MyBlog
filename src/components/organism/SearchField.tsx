import React from "react";
import {SearchInput} from "../atoms/input/SearchInput"
import {SubmitButton} from "../atoms/button/SubmitButton"

export const SearchField = () => {
  return (
    <form className="flex flex-col items-center space-y-2 mb-3 surface:flex-row surface:justify-center surface:space-y-0 surface:space-x-2">
      <SearchInput />
      <SubmitButton />
    </form>
  );
}
