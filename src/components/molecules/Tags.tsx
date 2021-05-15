import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';
import React, { VFC } from 'react';
import { useRecoilState } from 'recoil';
import { tagsState } from './../provider/tagsState';

export const Tags: VFC = () => {
  const [tags, setTags] = useRecoilState(tagsState);

  return (
    <ReactTagInput tags={tags} onChange={(newTags: typeof tags) => setTags(newTags)} readOnly />
  );
};
