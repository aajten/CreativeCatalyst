import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Mail,
  Briefcase,
  LogOut,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      {/* Sidebar */}
      <aside className="w-72 bg-zinc-900 border-r border-zinc-800">
        <div className="p-6 border-b border-zinc-800">
          <h1 className="text-2xl font-bold text-orange-500">
            Creative Catalyst
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Admin Panel
          </p>
        </div>

        <nav className="p-4 space-y-2">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            href="/admin/leads"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 transition"
          >
            <Users size={20} />
            Consultation Leads
          </Link>

          <Link
            href="/admin/messages"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 transition"
          >
            <Mail size={20} />
            Contact Messages
          </Link>

          <Link
            href="/admin/portfolio"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 transition"
          >
            <Briefcase size={20} />
            Portfolio
          </Link>
        </nav>

        <div className="absolute bottom-0 w-72 p-4 border-t border-zinc-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="h-20 border-b border-zinc-800 bg-zinc-900 flex items-center justify-between px-8">
          <h2 className="text-xl font-semibold">
            Admin Dashboard
          </h2>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center font-bold">
              A
            </div>
            <span>Admin</span>
          </div>
        </header>

        {/* Page Content */}
        <section className="p-8">{children}</section>
      </main>
    </div>
  );
}