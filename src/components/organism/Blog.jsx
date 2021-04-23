import { BlogList } from "../molecules/BlogList";

export const Blog = ({ blog }) => {
  return (
    <main className="md:flex-flex2">
      <BlogList blog={blog} />
    </main>
  );
};
