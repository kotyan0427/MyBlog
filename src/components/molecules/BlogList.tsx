import { Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { memo, VFC } from 'react';
import { AllBlogTypes } from '../types/allBlogs';

export const BlogList: VFC<AllBlogTypes> = memo(({ blogData }) => {
  return (
    <ul className=" grid gap-5 grid-cols-cardResGrid  md:pl-0 md:pr-5 lg:grid-cols-3">
      {blogData.contents.map((item) => {
        return (
          <Link href={`/${item.id}`} key={item.id}>
            <div className="cardComponent duration-500 hover:hoverEffect">
              <Stack spacing={{ base: 1, sm: 2.5 }}>
                <img className="h-24" src={item.images.url} alt="画像" />
                <p className="font-semibold  text-gray-600 phone:text-center h-12 sm:h-6">
                  {item.title}
                </p>
                <p className="text-gray-400 text-right text-xs">
                  {new Date(item.publishedAt).toLocaleDateString()}
                </p>
              </Stack>
            </div>
          </Link>
        );
      })}
    </ul>
  );
});
