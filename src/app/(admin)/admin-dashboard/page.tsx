import AdminDashboard from "@/components/features/admin/dashboard/AdminDashboard";
import Container from "@/components/share/Container";
import { getAuthSession } from "@/features/auth/auth-helpers";
import { forbidden, unauthorized } from "next/navigation";
import React from "react";

const AdminDashboardPage = async () => {
  const session = await getAuthSession();
  if (!session) unauthorized();

  if (session?.user?.role !== "admin") {
    return forbidden();
  }
  return (
    <React.Fragment>
      <main className="container w-full min-h-screen bg-slate-300 p-3 mx-auto">
        <Container>
          <AdminDashboard />
        </Container>
      </main>
    </React.Fragment>
  );
};

export default AdminDashboardPage;
