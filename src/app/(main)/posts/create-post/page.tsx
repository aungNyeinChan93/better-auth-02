import CreatePostForm from "@/components/features/post/CreatePostForm";
import { getAuthSession } from "@/features/auth/auth-helpers";
import React from "react";

const CreatePostPage = async () => {
  const session = await getAuthSession();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 container mx-auto p-2 my-3 rounded-2xl">
        <div className="flex flex-col gap-4">
          <CreatePostForm session={session} />
        </div>
      </main>
    </React.Fragment>
  );
};

export default CreatePostPage;
