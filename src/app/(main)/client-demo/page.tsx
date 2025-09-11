import TestAuth from "@/components/features/client-demo/TestAuth";
import TestLogin from "@/components/features/client-demo/TestLogin";
import React from "react";

const ClientDemoPage = async () => {
  return (
    <React.Fragment>
      <main>
        <TestLogin />
      </main>
    </React.Fragment>
  );
};

export default ClientDemoPage;
