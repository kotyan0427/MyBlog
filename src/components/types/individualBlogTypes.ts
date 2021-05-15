export type IndividualBlogTypes = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  images: {
    url: string;
    height: number;
    width: number;
  };
  tag: string;
};
