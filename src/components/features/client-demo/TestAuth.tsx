"use client";

import authClient, { useSession } from "@/lib/auth-cleint";
import React, { useEffect } from "react";

const TestAuth = () => {
  const { data, error, isPending } = useSession();
  console.log({ data, error, isPending });

  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(data?.user, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default TestAuth;
