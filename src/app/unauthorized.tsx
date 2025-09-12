import Unauthorize from "@/components/share/Unauthorize";
import Link from "next/link";
import React from "react";

const UnauthorizedPage = async () => {
  return (
    <React.Fragment>
      <Unauthorize path="login" />
    </React.Fragment>
  );
};

export default UnauthorizedPage;
