import AuthNavbar from "@/components/share/AuthNavbar";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AuthLayout = async ({ children }: Props) => {
  return (
    <React.Fragment>
      <main>
        <AuthNavbar />
        {children}
      </main>
    </React.Fragment>
  );
};

export default AuthLayout;
