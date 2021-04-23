export const IndividualBlog = ({ blog }) => {
  return (
    <main className="md:flex-flex2 md:pr-5">
      <h1 className="font-semibold text-xl">{blog.title}</h1>
      <p className="text-right text-gray-600">{new Date(blog.publishedAt).toLocaleDateString()}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  );
};
