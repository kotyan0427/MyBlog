import { memo, VFC } from 'react';
import { BlogList } from '../molecules/BlogList';
import { AllBlogTypes } from '../types/allBlogs';

export const Blog: VFC<AllBlogTypes> = memo(({ blogData }) => {
  return (
    <main className="md:flex-flex2">
      {blogData.contents.length ? <BlogList blogData={blogData} /> : <p className='text-center md:text-left md:ml-10'>ブログが見つかりませんでした</p>}
    </main>
  );
});
