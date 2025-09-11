import { PostType } from "@/features/posts/posts-helper";
import { Post } from "@/generated/prisma";
import { auth } from "@/lib/auth";
import React from "react";

interface Props {
  posts?: PostType[] | null;
}

export default function PostLists({ posts }: Props) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img
              src={"/next.svg"}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-slate-600 mb-3">{post?.content}</p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>
                  By{" "}
                  <span className="font-medium text-slate-700">
                    {post?.author?.name}
                  </span>
                </span>
                <span>{post?.created_at.toLocaleDateString()}</span>
              </div>
            </div>
          </article>
        ))}
      </main>
      {/* <footer className="bg-white border-t py-6 mt-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} PostList Inc. All rights reserved.
      </footer> */}
    </div>
  );
}
