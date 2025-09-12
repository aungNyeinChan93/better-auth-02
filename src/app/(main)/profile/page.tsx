import UserProfile from "@/components/features/profile/UserProfile";
import {
  type ServerAuthSession,
  getAuthSession,
} from "@/features/auth/auth-helpers";
import {
  notFound,
  redirect,
  RedirectType,
  unauthorized,
} from "next/navigation";
import React from "react";

const ProfilePage = async () => {
  const session: ServerAuthSession | undefined | null = await getAuthSession();

  if (!session) {
    return unauthorized();
  }

  return (
    <React.Fragment>
      <main className="w-full min-h-screen container mx-auto p-3">
        <UserProfile session={session} />
      </main>
    </React.Fragment>
  );
};

export default ProfilePage;
