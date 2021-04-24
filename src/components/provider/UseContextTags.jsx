import React, { createContext, useState } from "react";

export const TagsContext = createContext([]);

export const UseContextTags = ({ children }) => {
  const [tags, setTags] = useState(["sample1", "sample2", "sample3", "sample4"]);

  return <TagsContext.Provider value={{ tags, setTags }}>{children}</TagsContext.Provider>;
};
