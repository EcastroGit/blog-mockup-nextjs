import BlogPosts from "@/components/BlogPosts";

function Posts() {
  return (
    <div>
      <br />
      <h2 className="m-10 text-center text-4xl">Posts</h2>
      <BlogPosts numPosts={6} />
    </div>
  );
}

export default Posts;
