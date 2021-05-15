import { VFC } from 'react';
import { Tags } from './Tags';

export const TagLists: VFC = () => {
  return (
    <div>
      <h1 className="asideHeading">タグ一覧</h1>
      <div className="mt-5">
        <Tags />
      </div>
    </div>
  );
};
