import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import React, { useContext } from "react";
import { TagsContext } from "../provider/UseContextTags";

export const Tags = () => {
  const { tags, setTags } = useContext(TagsContext);

  return <ReactTagInput tags={tags} onChange={(newTags) => setTags(newTags)} readOnly />;
};
