import React from "react";

const RootNotFoundPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center bg-slate-950">
        <p className="text-red-500 capitalize text-2xl tracking-wider">
          404 | not found page
        </p>
      </main>
    </React.Fragment>
  );
};

export default RootNotFoundPage;
