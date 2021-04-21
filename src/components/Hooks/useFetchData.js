export const useFetchData = async () => {
  const key = {
    headers: {
      "X-API-KEY": process.env.API_KEY,
    },
  };

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
