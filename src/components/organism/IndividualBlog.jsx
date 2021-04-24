export const IndividualBlog = ({ blog }) => {
  return (
    <main className="md:flex-flex2 md:pr-5">
      <h1 className="font-semibold text-xl">{blog.title}</h1>
      <p className="text-right text-gray-600">{new Date(blog.publishedAt).toLocaleDateString()}</p>
      <div
        className="mb-5"
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
      <h2 className="asideHeading mb-5">タグ</h2>
      <span className="inline-block bg-gray-300 p-2 rounded-md cursor-pointer">{blog.tag}</span>
    </main>
  );
};
