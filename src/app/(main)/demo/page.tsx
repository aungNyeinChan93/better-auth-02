import Container from "@/components/share/Container";
import { getAllDemos } from "@/features/demo/demo-helper";
import React from "react";

const DemoPage = async () => {
  const demos = await getAllDemos();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center bg-slate-800 text-slate-50">
        {demos && (
          <>
            <pre>{demos ? JSON.stringify(demos, null, 2) : ""}</pre>
            <Container>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cum hic quisquam? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Atque veritatis modi, quis
                maiores in quos quas! Laborum sed ipsa ratione corporis, veniam
                autem tempora blanditiis, eius ducimus fuga reiciendis officiis.
              </p>
            </Container>
          </>
        )}
      </main>
    </React.Fragment>
  );
};

export default DemoPage;
