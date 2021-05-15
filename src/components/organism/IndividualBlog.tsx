import { memo, VFC } from 'react';
import { BlogInfoTypes } from '../types/blogs';

export const IndividualBlog: VFC<BlogInfoTypes> = memo(({ individualBlog }) => {
  return (
    <main className="md:flex-flex2 md:pr-5">
      <h1 className="font-semibold text-xl">{individualBlog.title}</h1>
      <p className="text-right text-gray-600">
        {new Date(individualBlog.publishedAt).toLocaleDateString()}
      </p>
      <div
        className="mb-5"
        dangerouslySetInnerHTML={{
          __html: `${individualBlog.body}`,
        }}
      />
      <h2 className="asideHeading mb-5">タグ</h2>
      <span className="inline-block bg-gray-300 p-2 rounded-md cursor-pointer">
        {individualBlog.tag}
      </span>
    </main>
  );
});
