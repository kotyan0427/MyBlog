import { key } from '../constants/headersKey';
import { ApiTypes } from '../types/api';

type BlogDataTypes = ApiTypes | null;
type UseFetchData = () => Promise<{ blogData: BlogDataTypes }>;

export const useFetchData: UseFetchData = async () => {
  const blogData: BlogDataTypes = await fetch('https://lotteblog.microcms.io/api/v1/myblog', key)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return null;
    });

  return {
    blogData,
  };
};
