import { key } from "./../constants/headersKey";

export const useFetchData = async () => {
  const blogData = await fetch("https://lotteblog.microcms.io/api/v1/myblog", key)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      console.error();
    });

  return {
    blogData,
  };
};
