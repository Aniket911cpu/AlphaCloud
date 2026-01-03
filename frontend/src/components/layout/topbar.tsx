"use client";

import { Bell, Command, Search, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function Topbar() {
    return (
        <header className="h-16 border-b border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-40">

            {/* Search / Command Palette */}
            <div className="flex items-center gap-4 flex-1 max-w-xl">
                <Button variant="outline" className="w-full justify-between text-muted-foreground bg-white/5 border-white/10 hover:bg-white/10 hover:text-white" onClick={() => alert("Command Palette (Cmd+K) Triggered")}>
                    <span className="flex items-center gap-2">
                        <Search className="w-4 h-4" />
                        <span className="hidden sm:inline-block">Search resources...</span>
                    </span>
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-black font-mono text-[10px] font-medium text-muted-foreground opacity-100 px-1.5">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </Button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 ml-4">

                <div className="hidden md:flex items-center gap-2 mr-2">
                    <Badge variant="outline" className="border-green-500/30 bg-green-500/10 text-green-400 capitalize flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        System Normal
                    </Badge>
                </div>

                <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-white">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-ping" />
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                            <Avatar className="h-9 w-9 border border-white/10">
                                <AvatarImage src="/avatars/01.png" alt="@user" />
                                <AvatarFallback className="bg-primary/20 text-primary font-bold">AN</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">Aniket</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    aniket@example.com
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-400">Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
