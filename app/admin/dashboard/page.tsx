import {
  Users,
  Mail,
  Briefcase,
  TrendingUp,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>
        <p className="text-zinc-400 mt-1">
          Welcome back to Creative Catalyst Admin Panel
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400 text-sm">
                Total Leads
              </p>
              <h2 className="text-3xl font-bold mt-2">
                0
              </h2>
            </div>

            <div className="p-3 rounded-xl bg-orange-500/20">
              <Users className="text-orange-500" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400 text-sm">
                Contact Messages
              </p>
              <h2 className="text-3xl font-bold mt-2">
                0
              </h2>
            </div>

            <div className="p-3 rounded-xl bg-blue-500/20">
              <Mail className="text-blue-500" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400 text-sm">
                Projects
              </p>
              <h2 className="text-3xl font-bold mt-2">
                0
              </h2>
            </div>

            <div className="p-3 rounded-xl bg-green-500/20">
              <Briefcase
                className="text-green-500"
                size={24}
              />
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400 text-sm">
                Growth
              </p>
              <h2 className="text-3xl font-bold mt-2">
                +0%
              </h2>
            </div>

            <div className="p-3 rounded-xl bg-purple-500/20">
              <TrendingUp
                className="text-purple-500"
                size={24}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Leads */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-xl font-semibold">
            Recent Enquiries
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-800">
              <tr>
                <th className="text-left px-6 py-4">
                  Name
                </th>
                <th className="text-left px-6 py-4">
                  Email
                </th>
                <th className="text-left px-6 py-4">
                  Service
                </th>
                <th className="text-left px-6 py-4">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-10 text-zinc-500"
                >
                  No enquiries available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">
          <button className="px-5 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition">
            View Leads
          </button>

          <button className="px-5 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium transition">
            View Messages
          </button>

          <button className="px-5 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium transition">
            Manage Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}