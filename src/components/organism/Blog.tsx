import { memo, VFC } from 'react';
import { BlogList } from '../molecules/BlogList';
import { AllBlogTypes } from '../types/allBlogs';

export const Blog: VFC<AllBlogTypes> = memo(({ blogData }) => {
  return (
    <main className="md:flex-flex2">
      <BlogList blogData={blogData} />
    </main>
  );
});
