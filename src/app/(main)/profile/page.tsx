import UserProfile from "@/components/features/profile/UserProfile";
import { type AuthSession, getAuthSession } from "@/features/auth/auth-helpers";
import React from "react";

const ProfilePage = async () => {
  const session: AuthSession | undefined = await getAuthSession();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen container mx-auto p-3">
        <UserProfile session={session} />
      </main>
    </React.Fragment>
  );
};

export default ProfilePage;
