import BlogPosts from "@/components/BlogPosts";

function Posts() {
  return (
    <div>
      <br />
      <h2 className="text-4xl m-10 text-center font-bold">Posts</h2>
      <BlogPosts numPosts={6} />
    </div>
  );
}

export default Posts;
