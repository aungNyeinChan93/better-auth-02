import TestAuth from "@/components/features/client-demo/TestAuth";
import TestLogin from "@/components/features/client-demo/TestLogin";
import TestLogout from "@/components/features/client-demo/TestLogout";
import TestRegister from "@/components/features/client-demo/TestRegister";
import React from "react";

const ClientDemoPage = async () => {
  return (
    <React.Fragment>
      <main>
        <div className="flex flex-col sm:flex-row justify-around items-center">
          <TestLogin />
          <TestRegister />
          <TestLogout />
          <TestAuth />
        </div>
      </main>
    </React.Fragment>
  );
};

export default ClientDemoPage;
