import { getAuthUser } from "@/features/auth/auth-helpers";
import React, { Suspense } from "react";
import { threadId } from "worker_threads";

const DemoOnePage = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  const authUser = await getAuthUser();
  //   throw new Error("testing error");
  return (
    <React.Fragment>
      <main className="container mx-auto">
        <Suspense fallback={<p>Loading . . . </p>}>
          <pre>{JSON.stringify(authUser, null, 2)}</pre>
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default DemoOnePage;
