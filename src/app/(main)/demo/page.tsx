import { getAllDemos } from "@/features/demo/demo-helper";
import React from "react";

const DemoPage = async () => {
  const demos = await getAllDemos();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center bg-slate-800 text-slate-50">
        {demos && (
          <>
            <pre>{JSON.stringify(demos, null, 2)}</pre>
          </>
        )}
      </main>
    </React.Fragment>
  );
};

export default DemoPage;
