import UserDetail from "@/components/features/users/UserDetail";
import { getAllPostById, getAllPosts } from "@/features/posts/posts-helper";
import { getUserById } from "@/features/users/users-helper";
import React from "react";

interface Props {
  params: Promise<{ id?: string }>;
}

const DetailUserPage = async ({ params }: Props) => {
  const { id } = await params;
  const [user, posts] = await Promise.all([
    getUserById(id as string),
    getAllPostById(id as string),
  ]);
  return (
    <React.Fragment>
      <main className="w-full min-h-screen ">
        <UserDetail user={user} posts={posts} />
      </main>
    </React.Fragment>
  );
};

export default DetailUserPage;
