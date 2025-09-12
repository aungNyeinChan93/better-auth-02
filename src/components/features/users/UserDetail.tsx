"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PostType } from "@/features/posts/posts-helper";
import { User } from "@/generated/prisma";
import Link from "next/link";

interface Props {
  user?: Partial<User> | null;
  posts?: PostType[] | null;
}

const UserDetail = ({ user, posts }: Props) => {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      {/* User Profile Section */}
      <section className="flex items-center gap-4 p-4 rounded-2xl shadow-md bg-white">
        <img
          src={user?.image || "/next.svg"}
          alt="User Avatar"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{user?.name || "unknown"}</h1>
          <div className="my-2">
            <p className="text-indigo-600 text-xs px-2 py-1 rounded-4xl bg-slate-50 inline">
              {user?.role || "guest"}
            </p>
          </div>
          <Button className="mt-2">Edit Profile</Button>
          <Button asChild variant={"outline"} className="mt-2 ms-2">
            <Link href={"/users"}>Back</Link>
          </Button>
        </div>
      </section>

      {/* Posts List Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Latest Posts</h2>
        {Array.isArray(posts) ? (
          posts?.map((post) => (
            <Card
              key={post.id}
              className="rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{post.content}</p>
                <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
                  <span className="!text-slate-900 font-semibold capitalize">
                    {post.author?.name}
                  </span>
                  <div className="flex gap-4">
                    <span>👍 {"10"}</span>
                    <span>💬 {"2"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <>
            <p className="text-lg text-indigo-500 font-bold tracking-wide ">
              Not Found Post . . .
            </p>
          </>
        )}
      </section>
    </main>
  );
};

export default UserDetail;
