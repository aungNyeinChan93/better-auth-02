import LoginForm from "@/components/features/auth/LoginForm";
import React from "react";

const LoginPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full h-auto flex justify-center items-center">
        <LoginForm />
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
