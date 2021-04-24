import React, { createContext, useState } from "react";

export const TagsContext = createContext([]);

export const UseContextTags = ({ children }) => {
  const [tags, setTags] = useState(["千葉ロッテ", "益田", "岡"]);

  return <TagsContext.Provider value={{ tags, setTags }}>{children}</TagsContext.Provider>;
};
