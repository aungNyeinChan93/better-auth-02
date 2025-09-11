import PostLists from "@/components/features/post/PostLists";
import { getAllPosts, type PostType } from "@/features/posts/posts-helper";
import { array } from "better-auth";
import Link from "next/link";
import React from "react";

const PostsPage = async () => {
  const posts: PostType[] | undefined = await getAllPosts();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 container mx-auto p-2 rounded-2xl">
        <div className="flex flex-col">
          <div className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-slate-900">Post Lists</h1>
              <Link
                href={"/posts/create-post"}
                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl shadow"
              >
                New Post
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <PostLists posts={posts} />
        </div>
      </main>
    </React.Fragment>
  );
};

export default PostsPage;
