import Link from "next/link";
import React from "react";

const RootForbiddenPage = async () => {
  return (
    <React.Fragment>
      <main className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h3 className="text-red-600 p-4 text-2xl">
            You are not authorized this case !
          </h3>
          <Link
            className=" underline underline-offset-4 decoration-indigo-200 text-indigo-400"
            href={"/"}
          >
            refresh
          </Link>
        </div>
      </main>
    </React.Fragment>
  );
};

export default RootForbiddenPage;
