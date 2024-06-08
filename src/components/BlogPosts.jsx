"use client";
import { useState, useEffect } from "react";
import "@/styles/blogPosts.css";

function BlogPosts({ numPosts }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((data) => data.json())
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="posts-container">
      {posts.slice(0, numPosts).map((i) => {
        return (
          <div className="post-card" key={i.id}>
            <div className="post-title">
              <h2 className="font-bold">{i.title}</h2>
            </div>
            <div className="post-body">{i.body}</div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogPosts;
