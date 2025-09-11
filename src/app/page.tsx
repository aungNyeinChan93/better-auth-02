import { getAuthSession } from "@/features/auth/auth-helpers";
import React from "react";

const HomePage = async () => {
  const session = await getAuthSession();
  console.log({ session });

  return (
    <React.Fragment>
      <main className="bg-green-50 w-full min-h-screen container mx-auto">
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
