import BlogPosts from "@/components/BlogPosts";

function Posts() {
  return (
    <div>
      <br />
      <h2 className="text-4xl m-10 text-center font-bold">Posts</h2>
      <section>
        <BlogPosts numPosts={6} />
      </section>
    </div>
  );
}

export default Posts;
