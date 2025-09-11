import UserLists from "@/components/features/users/UserLists";
import { getAllUsers, type UserType } from "@/features/users/users-helper";
import React from "react";

const UsersPage = async () => {
  const users: UserType[] | undefined = await getAllUsers();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <UserLists users={users} />
      </main>
    </React.Fragment>
  );
};

export default UsersPage;
