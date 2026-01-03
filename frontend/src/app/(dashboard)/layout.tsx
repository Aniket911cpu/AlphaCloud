import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full bg-[#0a0a0a] overflow-hidden text-foreground">
            {/* Background with subtle gradient mesh or noise if needed */}
            <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0a] to-[#0a0a0a]" />

            <Sidebar />
            <div className="flex flex-col flex-1 relative z-10 h-screen overflow-hidden">
                <Topbar />
                <main className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    {children}
                </main>
            </div>
        </div>
    );
}
