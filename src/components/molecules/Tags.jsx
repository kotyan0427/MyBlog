import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { useState } from "react";

export const Tags = () => {
  const [tags, setTags] = useState(["sample", "sample", "sample", "sample"]);

  return <ReactTagInput tags={tags} onChange={(newTags) => setTags(newTags)} readOnly />;
};
