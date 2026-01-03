"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    Server,
    Database,
    Globe,
    BrainCircuit,
    Settings,
    LayoutDashboard,
    Box,
    Activity,
    LogOut,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const sidebarItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
    { icon: Server, label: "Compute", href: "/compute" },
    { icon: Database, label: "Storage", href: "/storage" },
    { icon: Globe, label: "Networking", href: "/networking" },
    { icon: BrainCircuit, label: "Nexus AI", href: "/ai" },
    { icon: Box, label: "Marketplace", href: "/marketplace" },
    { icon: Activity, label: "Observability", href: "/observability" },
    { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <motion.aside
            initial={{ width: 240 }}
            animate={{ width: isCollapsed ? 72 : 240 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
                "relative flex flex-col h-screen border-r border-white/10 bg-black/40 backdrop-blur-xl z-50",
                "transition-all duration-300 ease-in-out"
            )}
        >
            {/* Logo Area */}
            <div className="flex items-center h-16 px-4 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50 text-primary">
                        <Server className="w-5 h-5" />
                    </div>
                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="font-bold text-lg tracking-wide text-white whitespace-nowrap"
                            >
                                Nexus<span className="text-primary">Cloud</span>
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Collapse Toggle */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute -right-3 top-20 z-50 rounded-full w-6 h-6 border border-white/20 bg-background text-muted-foreground hover:bg-primary/20 hover:text-primary shadow-sm"
            >
                {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
            </Button>


            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-4 px-2 space-y-2 scrollbar-hide">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                        <Link
                            key={item.href}
                            href="#" // Mock links for now
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                                isActive
                                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5 shrink-0", isActive && "text-primary")} />
                            <AnimatePresence>
                                {!isCollapsed && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="truncate"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            {isActive && !isCollapsed && (
                                <motion.div
                                    layoutId="active-indicator"
                                    className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                                />
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* Footer / User */}
            <div className="p-2 border-t border-white/10 shrink-0">
                <Link href="#" className={cn("flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors", isCollapsed && "justify-center")}>
                    <LogOut className="w-5 h-5" />
                    {!isCollapsed && <span>Sign Out</span>}
                </Link>
            </div>
        </motion.aside>
    );
}
