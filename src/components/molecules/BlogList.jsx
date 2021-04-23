import { Stack } from "@chakra-ui/react";

export const BlogList = ({ blog }) => {
  return (
    <ul className=" grid gap-5 grid-cols-cardResGrid  md:pl-0 md:pr-5 lg:grid-cols-3">
      {blog.map((item) => {
        return (
          <div className="cardComponent duration-500 hover:hoverEffect" key={item.id}>
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
        );
      })}
    </ul>
  );
};
