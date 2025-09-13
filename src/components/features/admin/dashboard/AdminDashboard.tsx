import React from "react";

export default function AdminDashboard() {
  const stats = [
    { id: 1, label: "Total Users", value: "12,482", change: "+4.2%" },
    { id: 2, label: "Active Projects", value: "128", change: "-1.1%" },
    { id: 3, label: "Revenue", value: "$42,300", change: "+8.9%" },
    { id: 4, label: "New Signups", value: "1,204", change: "+12%" },
  ];

  const recentTasks = [
    {
      id: 1,
      title: "Design landing page",
      user: "Lina M.",
      status: "In Progress",
      due: "Sep 9",
    },
    {
      id: 2,
      title: "API: auth improvements",
      user: "Omar K.",
      status: "Review",
      due: "Sep 11",
    },
    {
      id: 3,
      title: "Fix payment bug",
      user: "Jae H.",
      status: "Done",
      due: "Sep 5",
    },
    {
      id: 4,
      title: "Write docs: onboarding",
      user: "Priya S.",
      status: "Todo",
      due: "Sep 15",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3 lg:col-span-2 bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-semibold">
                D
              </div>
              <div>
                <h3 className="text-sm font-semibold">Dashly</h3>
                <p className="text-xs text-slate-400">Analytics & management</p>
              </div>
            </div>

            <nav className="space-y-1">
              <NavItem label="Overview" active />
              <NavItem label="Projects" />
              <NavItem label="Tasks" />
              <NavItem label="Users" />
              <NavItem label="Settings" />
            </nav>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500">
                Upgrade for more features
              </p>
              <button className="mt-3 w-full py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow">
                Upgrade
              </button>
            </div>
          </aside>

          {/* Main */}
          <main className="col-span-12 md:col-span-9 lg:col-span-10">
            <header className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold">Overview</h1>
                <div className="hidden sm:flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
                  <input
                    className="outline-none text-sm"
                    placeholder="Search projects, tasks..."
                  />
                  <button className="text-sm text-slate-500">⌕</button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="text-sm bg-white px-3 py-2 rounded-xl shadow-sm">
                  Reports
                </button>
                <button className="text-sm bg-white px-3 py-2 rounded-xl shadow-sm">
                  Filters
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center">
                    🔔
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-400 to-indigo-500 text-white flex items-center justify-center font-medium">
                    AL
                  </div>
                </div>
              </div>
            </header>

            {/* Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats.map((s) => (
                <div key={s.id} className="bg-white p-4 rounded-2xl shadow-sm">
                  <p className="text-xs text-slate-500">{s.label}</p>
                  <div className="flex items-baseline justify-between mt-2">
                    <h3 className="text-xl font-semibold">{s.value}</h3>
                    <span
                      className={`text-sm font-medium ${
                        s.change.startsWith("+")
                          ? "text-green-600"
                          : "text-rose-600"
                      }`}
                    >
                      {s.change}
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-slate-400">
                    Compared to last week
                  </div>
                </div>
              ))}
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart card */}
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">Traffic</h2>
                    <p className="text-sm text-slate-400">
                      Visitors over the last 30 days
                    </p>
                  </div>
                  <div className="text-sm text-slate-500">Avg: 4.2k/day</div>
                </div>

                <div className="mt-6">
                  {/* Placeholder sparkline / area chart (SVG) */}
                  <svg
                    className="w-full h-48"
                    viewBox="0 0 800 200"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#6366F1"
                          stopOpacity="0.18"
                        />
                        <stop
                          offset="100%"
                          stopColor="#6366F1"
                          stopOpacity="0.02"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,140 C80,120 160,80 240,90 C320,100 400,60 480,80 C560,100 640,40 720,60 C800,80 880,60 960,20"
                      fill="url(#g1)"
                      stroke="none"
                      transform="scale(0.83,1)"
                    />
                  </svg>
                </div>

                <div className="mt-4 flex gap-3 text-sm text-slate-500">
                  <div>
                    Users:{" "}
                    <span className="ml-1 font-medium text-slate-700">
                      9,213
                    </span>
                  </div>
                  <div>
                    Sessions:{" "}
                    <span className="ml-1 font-medium text-slate-700">
                      11,982
                    </span>
                  </div>
                </div>
              </div>

              {/* Recent activity / tasks */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-lg font-semibold mb-2">Recent Tasks</h2>
                <ul className="space-y-3">
                  {recentTasks.map((t) => (
                    <li
                      key={t.id}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm font-medium">{t.title}</div>
                        <div className="text-xs text-slate-400">
                          {t.user} • due {t.due}
                        </div>
                      </div>
                      <div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            t.status === "Done"
                              ? "bg-green-100 text-green-800"
                              : t.status === "In Progress"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {t.status}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 text-center">
                  <button className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-xl">
                    View all tasks
                  </button>
                </div>
              </div>
            </section>

            {/* Table / list */}
            <section className="mt-6 bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Active Projects</h3>
                <div className="text-sm text-slate-500">Showing 8 of 24</div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-xs text-slate-500 border-b">
                      <th className="py-3">Project</th>
                      <th className="py-3">Owner</th>
                      <th className="py-3">Status</th>
                      <th className="py-3">Progress</th>
                      <th className="py-3">Due</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b hover:bg-slate-50">
                      <td className="py-3">Marketing site revamp</td>
                      <td className="py-3">Lina M.</td>
                      <td className="py-3">Live</td>
                      <td className="py-3">80%</td>
                      <td className="py-3">Oct 3</td>
                    </tr>

                    <tr className="border-b hover:bg-slate-50">
                      <td className="py-3">Mobile app v2</td>
                      <td className="py-3">Omar K.</td>
                      <td className="py-3">Staging</td>
                      <td className="py-3">45%</td>
                      <td className="py-3">Nov 1</td>
                    </tr>

                    <tr className="border-b hover:bg-slate-50">
                      <td className="py-3">Payments refactor</td>
                      <td className="py-3">Jae H.</td>
                      <td className="py-3">QA</td>
                      <td className="py-3">60%</td>
                      <td className="py-3">Sep 28</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <footer className="mt-6 text-sm text-slate-400">
              © {new Date().getFullYear()} Dashly — built with ❤️
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

function NavItem({ label = "", active = false }) {
  return (
    <button
      className={`w-full text-left flex items-center gap-3 py-2 px-2 rounded-lg ${
        active
          ? "bg-indigo-50 text-indigo-600 font-medium"
          : "text-slate-700 hover:bg-slate-50"
      }`}
    >
      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm">
        •
      </div>
      <span className="text-sm">{label}</span>
    </button>
  );
}
