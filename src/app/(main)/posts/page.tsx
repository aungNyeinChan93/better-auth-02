import { getAllPosts } from "@/features/posts/posts-helper";
import Link from "next/link";
import React from "react";

const PostsPage = async () => {
  const posts = await getAllPosts();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 container mx-auto p-2 rounded-2xl">
        <div className="flex flex-col">
          <div className=" flex justify-between px-10 py-2 shadow-blue-200 bg-indigo-200 rounded-2xl">
            <h3>Posts</h3>
            <Link href={"/posts/create-post"}>Create Post</Link>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 my-2 overflow-hidden">
          {posts &&
            Array.isArray(posts) &&
            posts?.map((post) => (
              <h3 className="p-2 bg-slate-50 " key={post?.id}>
                <h2 className="text-xl capitalize font-semibold tracking-wider">
                  {post?.title}
                </h2>
                <div className="flex justify-between p-2 bg-amber-300/20 rounded my-4">
                  <p className="text-xs text-slate-600">{post?.author?.name}</p>
                  <p className="text-xs text-slate-600">{post?.author?.role}</p>
                </div>
                <p>{post?.content}</p>
              </h3>
            ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export default PostsPage;
