import { atom } from 'recoil';

export const tagsState = atom<string[]>({
  key: 'tagsState',
  default: ['千葉ロッテ','益田','岡'],
});
