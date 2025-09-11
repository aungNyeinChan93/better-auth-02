"use client";

import { createPostAction } from "@/features/posts/post-actions";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React, { useActionState } from "react";

interface Props {
  session: typeof auth.$Infer.Session | null;
}

const CreatePostForm = ({ session }: Props) => {
  const [state, formAction] = useActionState(createPostAction, undefined);

  if (state?.success) {
    return redirect("/posts");
  }
  return (
    <div className=" w-full  flex flex-col">
      {/* Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Post Form */}
        <div className="bg-white p-6 rounded-2xl shadow max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-4">Create New Post</h2>
          <p>
            {!state?.success && (
              <>
                <p className="text-red-600">{state?.error}</p>
              </>
            )}
          </p>
          <form className="space-y-4" action={formAction}>
            {/* Title */}
            <input type="hidden" name="id" value={session?.user?.id} />
            <div>
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter post title"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-gray-700 mb-2">Content</label>
              <textarea
                name="content"
                rows={5}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Write your content here..."
              />
            </div>

            {/* Image */}
            <div>
              <label className="block text-gray-700 mb-2">Image</label>
              <input
                type="file"
                accept="image/*"
                name="image"
                className="w-full"
              />
              {/* {formData.image && (
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Preview"
                  className="mt-4 w-40 h-40 object-cover rounded-lg"
                />
              )} */}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit Post
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreatePostForm;
